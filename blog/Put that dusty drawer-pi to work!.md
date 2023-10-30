I have a theory that computers and developers live in a symbiotic relationship akin to trees and fungus. The two exist, interwoven in a mutually beneficial relationship. In a forest, this relationship occasionally manifests itself visually in the form of a mushroom, whereas in the dwelling of a developer a parallel of this would be the random electronics that seem to grow out of nowhere to clutter the table space and backs-of-drawers (another similar example is literally any human inhabitation and wooden pallets, I swear those things naturally occur where ever humans go). 


- my wish is to take the few original pi's sitting in my drawer into use to run some very lightweight tasks / services - and also play around with pixie and the network in general
- the original raspberry pi does not have the capability to boot over network (or usb) built in
	- there's no bios that would normally do this stuff, even if arm chips are capable
	- running off the sd is possible, but not adviseable because of the finite lifespan of the sd cards and the pretty crap i/o
- but! Using a "sacrifical" sd card (i.e. a card of just about any size above zero that you don't mind staying with the pi) you can have the pi boot off the sd card and then load the operating system over network, meaning the card does not get written to after the initial load
	- https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-boot-modes
- alpine, which I've chosen simply because I have some portmarketos hosts to begin with, requires a minimum of 256mb of memory, just about fitting with the original pi (for now anyway)
- pixiecore (which produces an intriguing mix of results when searched, ranging from slightly esoteric and impractical fashion to server infrastructure management)
- use the nixos config available
	- serve alpine netboot image for armhf (because the original pi is very old and does not support armv7 or aarch64)
	- https://medium.com/@peter.bolch/how-to-netboot-with-ipxe-6191ed711348
- tried with pixiecore, which was relatively simple to set up on nixos:
  ```
  services.pixiecore = {
      enable = true;
      # Don't bind to dhcp port, since dhcp is handled elsewhere
      dhcpNoBind = true;
      kernel = "/home/uille/boot/vmlinuz-rpi";
      initrd = "/home/uille/boot/initramfs-rpi";
      # The alpine netboot wikipage defines some arguments as required
      # ip=dhcp, self-explanatory
      # alpine_repo, ditto
      # modloop, load additional kernel modules found in the netboot package
      # pixiecore serves them via http via the templating function below
      # Note use of backticks for the template because of Go
      cmdLine = "ip=dhcp alpine_repo=http://dl-cdn.alpinelinux.org modloop={{ ID `/home/uille/boot/modloop-rpi` }}";
  };
  ```
- unfortunately this didn't turn out to be quite as simple as I had hoped, and as I had chosen this option for its convenience, I think I will shelve it for now
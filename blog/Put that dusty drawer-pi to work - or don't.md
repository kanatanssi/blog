---
date: 2023-11-18
tags: blog
templateEngineOverride: md
---

I have a theory that computers and developers live in a symbiotic relationship akin to trees and fungus. The two exist, interwoven in a mutually beneficial relationship. In a forest, this relationship occasionally manifests itself visually in the form of a mushroom, whereas in the dwelling of a developer a parallel of this would be the random electronics that seem to grow out of nowhere to clutter the table space and backs-of-drawers (another similar example is literally any human inhabitation and wooden pallets, I swear those things naturally occur where ever humans go). 

A few of such wonders of nature had sprung into existence in my home, taking the the form of the original Raspberry Pi, sitting together like a sprawling colony of silicone fungi. Perhaps the dust could be shaken off and the delicate dance of connections and components could be reawoken to do *something* other than sit on the shelf gathering dust. Even with its meagre at best specs, on today's standards, the Pis could still maybe run some very lightweight tasks or services for the home network.

I planned for network booting and running the Pis off a disk shared over the network for the following reasons:
- I wished to play around with PXE (pronounced "pixie") for fun and profit
- I did not have enough of the old bulky sd cards that the original Pi consumes

My first challenge with the above plan arose just as soon as I had begun working on it - the original raspberry pi does not have the capability to boot over network (or usb) built in. Running off an sd card is possible, and very normal,  but not really advisable in the longer run given the finite lifespan of sd cards used in such a manner, and their pretty crap i/o in general (not that I honestly think the i/o would become an issue with the light use I had in mind for these devices, but still).

But! Checking out the documentation for the Raspberry pi and its <a href="https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-boot-modes" target="_blank">bootmodes</a>, turns out using a "sacrifical" sd card (i.e. a card of just about any size above zero that you don't mind staying with the pi) you can have the pi boot off the sd card and then load the operating system over network, meaning the card does not get written to after the initial load and all of this effectively works like network booting would.

For the operating system I decided to give Alpine a shot - mostly because I already had [[My old phone is my new server|an Alpine host in my home network]], but also because it can run off the measly 256mb of memory the original pi has. For my netbooting solution I went for Pixiecore, lured by its promises of convenience, which upon searching produces an intriguing mix of search results ranging from slightly esoteric and impractical fashion to server infrastructure management.

To run Pixiecore, I used the <a href="https://nixos.wiki/wiki/Netboot" target="_blank">available config for Nixos</a>. I picked the armhf image for Alpine linux (the original pi is very old and does not support armv7 or aarch64). I also referenced <a href="https://medium.com/@peter.bolch/how-to-netboot-with-ipxe-6191ed711348" target="_blank">an article on setting up Alpine over netboot</a>.

My Pixiecore config was roughly as follows:
  ```
  services.pixiecore = {
      enable = true;
      # Don't bind to dhcp port, since dhcp is handled elsewhere
      dhcpNoBind = true;
      kernel = "/home/username/boot/vmlinuz-rpi";
      initrd = "/home/username/boot/initramfs-rpi";
      # The alpine netboot wikipage defines some arguments as required
      # ip=dhcp, self-explanatory
      # alpine_repo, ditto
      # modloop, load additional kernel modules found in the netboot package
      # pixiecore serves them via http via the templating function below
      # Note use of backticks for the template because of Go
      cmdLine = "ip=dhcp alpine_repo=http://dl-cdn.alpinelinux.org modloop={{ ID `/home/uille/boot/modloop-rpi` }}";
  };
  ```

After some attempts, I eventually had to stop for the night. Unfortunately the process had been less smooth than I had hoped for from here on out. I had chosen this approach for its convenience, but the netbooting proved itself rather finicky - I would see traffic in the network that would imply the pi was requesting for the operating system, but ultimately saw little activity on the pi itself.

I also began doubting my purposes for setting all of this up - running a dedicated host for the "small and lightweight services" that I had in mind seemed counterintuitive, since a container or such on one of my larger, already up and running hosts could get the job easier for less effort. Perhaps I was overtaken by the enthusiasm to find a purpose for these pis, since I am prone to finding solutions before finding problems to solve when it comes to tinkering.

In the end, after shelving this project for a while (effectively landing the pis back in their dusty back of the drawer), I decided it was time for these brave Raspberry pis to retire from drawer duty and donated them to a local electronics hobbyist group. Good luck out there, brave drawer-pis!
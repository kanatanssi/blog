---
date: 2023-10-03
tags: blog
---
- I wanted to add the Beaglebone salvaged ages ago into my current infra in a some way that would not involve fiddling with sd-cards, or in general that required me to get hands on with the board too often
- PXE booting (I recently discovered it is pronounced "pixie" - very cute), files on NFS
	- do this for a bunch of the tiny hosts I have (original gen 1 raspberry pi, this salvaged beaglebone, postmarketos hosts), support the thin clients I have in my homelab with running some of the less demanding services (network boot in short http://www.raspibo.org/wiki/index.php/Raspberry_PI:_network_boot_explained, https://github.com/garyexplains/examples/blob/master/How%20to%20network%20boot%20a%20Pi%204.md)
- turns out BBB does not support PXE ootb (boot options: https://docs.beagleboard.org/latest/boards/beaglebone/black/ch05.html, http://www.diy.ind.in/linux/39-beaglebone-black-bbb-boot-process)
	- is ok, we can execute netboot with u-boot (https://www.emcraft.com/som/stm32mp1/loading-linux-images-via-ethernet-and-tftp)
	- and I suppose someone has already done something like it? http://cholla.mmto.org/bbb/network_boot.html
	- and there is a professional embedded linux training about it https://bootlin.com/blog/tftp-nfs-booting-beagle-bone-black-wireless-pocket-beagle/, kinda
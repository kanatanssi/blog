---
date-: 2023-09-30
layout: default.html
---
# Digital Gardening
These notes here are meant to be my corner of the Internet. I write about [[Galaxy S5 no battery mod|tinkering]], things that interest me and life. These notes are set to evolve over time, gradually growing greater and more varied like a little digital garden patch.

These notes came to be after I read about an ethos and working method called <a href="https://maggieappleton.com/garden-history" target="_blank">Digital Gardening</a>, which offered a very refreshing respite from the rather performative view I used to have on personal blogs, how I should have _something_ to showcase, hosted somewhere, for someone to read and see what a great person I am. Very performative indeed. These pages are made with 11ty and the help of the excellent <a href="https://photogabble.co.uk/projects/eleventyjs-interlink-plugin/" target="_blank">Interlink plugin</a> which makes creating <a href="https://obsidian.md" target="_blank">Obsidian</a> style backlinks a breeze.

The two - Digital Gardening and Obsidian - walk hand in hand here, as the ethos guides the style of writing I wished to adopt and the tool more than enables that with bidirectional linking, nifty graphical descriptions of topic cascades and more. For ease of use, I've set these pages to be hosted on Github Pages.

I write these notes for myself, as well as for you dear visitor, in the hopes that I would remember, and that you could maybe learn a thing or two from, my journeys.

## Wander the garden:
{% for post in collections.blog %}
- <a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}

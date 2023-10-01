// Add the htmlbase plugin to add path prefix to all urls automagically
// This is needed with Github Pages, since GH pages has the repo name in the path, e.g. /reponame/index.html
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig();
    
    // Rn the style is just included in the template
    //eleventyConfig.addPassthroughCopy("_includes/style.css");

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // Add the interlinker plugin to process obsidian-style links and backlinks
    eleventyConfig.addPlugin(
      require('@photogabble/eleventy-plugin-interlinker'),
    );

    return {
      dir: {
        input: "blog",
        output: "_site",
        includes: "../_includes",
        data: "../_data"
      },
    };
  };

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig();
    
    // Rn the style is just included in the template
    //eleventyConfig.addPassthroughCopy("_includes/style.css");

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

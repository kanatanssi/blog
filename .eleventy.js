module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig();
    
    // Rn the style is just included in the template
    //eleventyConfig.addPassthroughCopy("_includes/style.css");

    return {
      dir: {
        input: "blog",
        output: "_site",
        includes: "../_includes",
        data: "../_data"
      },
    };
  };

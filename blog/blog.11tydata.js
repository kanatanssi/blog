module.exports = {
    eleventyComputed: {
      // Make the title of pages their file name
      title: data => data.page.filePathStem.split('/').pop(),
      },
    };

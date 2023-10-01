module.exports = {
    eleventyComputed: {
      title: data => data.page.filePathStem.split('/').pop()
    }
  };
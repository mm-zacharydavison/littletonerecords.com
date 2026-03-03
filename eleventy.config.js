export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("releases", (collectionApi) => {
    return collectionApi.getFilteredByGlob("_releases/*.md").sort((a, b) => {
      return (b.date || 0) - (a.date || 0);
    });
  });

  eleventyConfig.addCollection("artists", (collectionApi) => {
    return collectionApi.getFilteredByGlob("_artists/*.md");
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
  };
}

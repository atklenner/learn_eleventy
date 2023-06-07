const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");
const dateFilter = require("./src/filters/date-filter.js");
const w3dateFilter = require("./src/filters/w3-date-filter.js");

module.exports = (config) => {
  config.addPassthroughCopy("./src/images");

  config.addCollection("work", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md"));
  });
  config.addCollection("featuredWork", (collection) => {
    return sortByDisplayOrder(
      collection
        .getFilteredByGlob("./src/work/*.md")
        .filter((x) => x.data.featured)
    );
  });
  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3dateFilter);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};

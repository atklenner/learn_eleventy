const Cache = require("@11ty/eleventy-fetch");

module.exports = async () => {
  try {
    const { items } = await Cache(
      "https://11ty-from-scratch-content-feeds.piccalil.li/media.json",
      {
        duration: "1d",
        type: "json",
      }
    );
    return items;
  } catch (error) {
    console.log(error);

    return [];
  }
};

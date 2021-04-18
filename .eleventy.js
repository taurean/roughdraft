module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/css");

    let markdownIt = require("markdown-it");
    let markdownItAnchor = require("markdown-it-anchor");
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
    let opts = {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    };

    eleventyConfig.setLibrary("md", markdownIt(options)
        .use(markdownItAnchor, opts)
    );

    eleventyConfig.addFilter("markdownify", function(value) {
        const md = new markdownIt(options)
        return md.render(value)
    })

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
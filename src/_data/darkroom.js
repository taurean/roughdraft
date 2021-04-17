const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')

async function getPosts() {
    // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
    const filter = groq `*[_type == "darkroomphoto" && published==true]{
        "photoUrl": photo.asset->url,
        internalDocumentName,
        imageAlt,
        slug
        }`
    const projection = ``;
    const order = ``
    const query = [filter, projection, order].join(' ')
    const docs = await client.fetch(query).catch(err => console.error(err))
    console.log(docs);
    return docs
}

module.exports = getPosts
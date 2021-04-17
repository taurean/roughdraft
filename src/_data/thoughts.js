const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')

function generatePost (post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.content, { ...client.config() })
  }
}

async function getPosts () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "thoughts" && published==true]`
  const projection = ``;
  const order = ``
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const docsOutput = docs.map(generatePost);
    return docsOutput
}

module.exports = getPosts
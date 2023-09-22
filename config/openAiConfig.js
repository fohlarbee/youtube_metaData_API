// const {Configuration, OpenAIApi} = require('openai')
const {OpenAI} = require('openai')
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY


})

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_KEY
// })

// const openai = new OpenAIApi(configuration)

module.exports = openai  
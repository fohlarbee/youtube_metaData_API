const openai = require('../config/openAiConfig')


const generateMetadata = async(req, res) => {
    const {title} = req.body
    const description = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: `Come up with a description for Youtube video called ${title}`,

        max_tokens:100,
        user:'user'
    })

    
    const tags = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: `Come up with 10 keywords for a youtube video for ${title}`,

        max_tokens:100,
        user:'user'
    })

    res.status(200).json({
        description: description.choices[0].text,
        tags: tags.choices[0].text,

    })

}


const generateImage = async (req, res) => {
    const image = await openai.images.generate({
        prompt:req.body.prompt,
        n:1,
        size:'512x512',
    })
    res.status(200).json({
        url:image.data[0].url
    })
}

module.exports = {generateMetadata, generateImage}
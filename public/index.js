// const { json } = require("express")

const metaDataForm = document.querySelector('.meta-data-form')
const imageForm = document.querySelector('.image-form')

//output elements
const description = document.querySelector('.description')
const tags = document.querySelector('.tags')
const thumbnail = document.querySelector('.thumbnail') 
const image = document.querySelector('#img') 


metaDataForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const response = await fetch('https://youtube-metadata-generator-1403ea2b1eaf.herokuapp.com/openai/meta', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({title: metaDataForm.title.value})

    })

    const json = await response.json()
    console.log(json)

    description.textContent = json.description
    tags.textContent = json.tags
})


imageForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const response = await fetch('https://youtube-metadata-generator-1403ea2b1eaf.herokuapp.com/openai/image', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({prompt: imageForm.prompt.value})

    })
    const json = await response.json()
    console.log(json.url)


    image.setAttribute('src', json.url)
    
})
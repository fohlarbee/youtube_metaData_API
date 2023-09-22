const express = require('express')
const {generateMetadata, generateImage} = require('./controllers/openAIContoller')
const port = process.env.PORT || 4000
const app = express()


//middleware
app.use(express.json())
app.use(express.static('public'))

//routes
app.post('/openai/meta', generateMetadata)
app.post('/openai/image', generateImage)


app.listen(port, () => console.log('listening on port 4000'))
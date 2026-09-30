const {OpenAI} = require('openai');
require('dotenv').config()
// const { Messages } = require('openai/resources/beta/threads/messages.mjs');

// Set your OpenAI API key
// const config = new openAi.Configuration({apikey:process.env.OPEN_API_KEY})
// Create a new OpenAI API instance
const openai  = new OpenAI({apiKey:process.env.OPEN_API_KEY})

// Function to generate a text-based conversation
async function main (){
const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages :[
        {role:"user", content: "Hello"}
    ]   
})
console.log(response)
}

main()
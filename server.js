const { response } = require('express')
const express = require('express') //This makes sure your server has access to express
const app = express() //Here we have () so it means we are using express and storing it in app
const PORT = 8000 //This assigns a variable to the port express will be listening to. It can be any number

//This next line of code is using express to perform a get request. The '/' is for the main page of the website (index.html). The arrow function shows what will be done when a get request to the main page has been requested. It takes in two parameters (request and response). Inside the function, we show what needs to be done for the response. The dirname + <filename> shows where the file is located. 
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}!`)
})

app.get('/api/:age', (req, res) => {
    console.log(req.params.age)
    res.json(savage)
})

const savage = {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
}
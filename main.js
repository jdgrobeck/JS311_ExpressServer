//check

console.log("Hello")

//brining in the functions provided by the express framework
let express = require('express');

// create an application object using express

let app = express();
//define the port we'll communicate through
let PORT = 8080;

// we're at domain localhost:8080
// first get request

app.get("/hello", (req, res) => {
    res.send("hello from the hello route")
})


//write a GET route definition that wil let me get by an name

app.get("/hello/:name", (req, res) => {
    let value = req.params.name;
    let message = "hello" + value;
    let msg2 = `hello ${value}`

    res.send(msg2)
} )



//write a GET route definition that will do this:
// if request url contains /bye?name=mike , --> "see ya later Mike"
// if request url contains /bye?name=jill , --> "see ya later Jill"

app.get("/bye", (req, res) => {
    let value = req.query.name;
    if(value){
    let message = `See ya later ${value}.`
    res.send(message)
    }
    else {
     res.send("See ya later.")
    }
} )




// if request url contains /bye , --> "see ya later"

//Set to variable?
// app.get("/bye", (req, res) => {
//     let message = "See ya later."

//     res.send(message)
// } )

//hint is you get the query parameters using: req.query.name






app.listen(PORT, () => { console.log('Application is listening on port ', PORT)})
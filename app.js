console.log("Loading app.js file")

// bring in express framework
let express = require('express');

// define the PORT
let PORT = 8080;

// create application server object
let app = express();

// make sure all the data passing back and forth is in json format
// using a middleware component

app.use(express.json())

//letting my app know where the public stuff is
app.use(express.static('public'))

//Having problems here
const toDos = require('./routes/todoRoutes')


app.use(toDos)

//more verbose
let bodyParser = express.json()
app.use(bodyParser)


let db = []; //this is for testing. Don't really do this in real world.

//1.
// app.get("/todos", (req, res) => {
//     console.log("GET /todos")
//     res.json(db);

// //Could get completed and not completed
// // using query param, if/else, like hello

// })

//2.
// app.get("/todos/:id", (req, res) => {
//     console.log("GET /todos/:id")
//     let myId = req.params.id;
//     //finding id and returning entire item
//     let matchingItem = db.find( (item, index) => {
//         return item.id == myId
//     })
    
//     if (matchingItem) {
//     res.json(matchingItem);
//     }
//     else {
//         res.send("Invalid ID")
//     }
// })

//3.
// app.delete("/todos/:id", (req, res) => {
//     console.log("DELETE /todos/:id")

//     let myId = req.params.id;
//     //find the index the item where the item's id = myId and splice it

//     let matchingIndex = db.findIndex( (item, index) => {
//         console.log(index)
//         return item.id == myId;
//     })


//     if (matchingIndex == 0){
//         let deletedItem = db.splice(matchingIndex, 1)
//         res.json(deletedItem);
// }
//     else if (matchingIndex > 0){
//         let deletedItem = db.splice(matchingIndex, 1)
//         res.json(deletedItem);
//     }
//     else {
//         res.send("No matching ID. No recorded deleted.")
//     }

// })

 

//4.
// app.post("/todos", (req, res) => {
//     console.log("POST /todos/")

//     let newItem = {}
//     newItem.id = getRandomInt();
//     newItem.description = req.body.description;
//     newItem.completed = false;

//     db.push(newItem);

//     //return newItem on the response
//     res.json(newItem);
// })


//5.
// app.put("/todos/:id", (req, res) => {
//     console.log("PUT /todos/")

//     // get the param id from the route
//     let myId = req.params.id;
//     // let currentBody = req.body;
//     let description = req.body.description;
//     let completed = req.body.completed == true;

//     //find the item that matches the id
//     let matchingItem = db.find( (item, index) => {
//         return item.id == myId
//     })

//     // to update description, get the req.body.description
    
//     //if found, put the completed var into matchingItem

//     if (description || completed) {
//     //to update completed, get the req.body.completed
//     // if true, setting it to completed variable
       
//     //Sets new description equal to matching item, so it will change
//         matchingItem.description = description;
//         matchingItem.completed = completed;
//         res.json(matchingItem)
//     }
//     else {
//         res.send("Item not updated.")
//     }


//     //res.json(matchingItem)
//     //otherwise, res.send("Item not updated")


// })



//function to return randon integer
const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}


app.listen(PORT, () => { console.log('Aplication is listening on port ', PORT)})
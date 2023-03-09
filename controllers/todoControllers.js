//in the HW, you'll require the appropriate data file here

// const todoData = require('../path-to-the-data-file')
// data source
let db = [];

const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}


const postTodo = (req, res) => {
    console.log("POST /todos/")
    let newItem = {}
    newItem.id = getRandomInt();
    newItem.description = req.body.description;
    newItem.completed = false;

    db.push(newItem);

    //return newItem on the response
    res.json(newItem);
}

const getAllTodos = (req, res) => {
    console.log("GET /todos")
    res.json(db);
}

const getTodoById = (req, res) => {
    console.log("GET /todos/:id")
    let myId = req.params.id;
    //finding id and returning entire item
    let matchingItem = db.find( (item, index) => {
        return item.id == myId
    })
    
    if (matchingItem) {
    res.json(matchingItem);
    }
    else {
        res.send("Invalid ID")
    }
}


const deleteTodo = (req, res) => {
    console.log("DELETE /todos/:id")

    let myId = req.params.id;
    //find the index the item where the item's id = myId and splice it

    let matchingIndex = db.findIndex( (item, index) => {
        console.log(index)
        return item.id == myId;
    })


    if (matchingIndex == 0){
        let deletedItem = db.splice(matchingIndex, 1)
        res.json(deletedItem);
}
    else if (matchingIndex > 0){
        let deletedItem = db.splice(matchingIndex, 1)
        res.json(deletedItem);
    }
    else {
        res.send("No matching ID. No recorded deleted.")
    }
}

const updateTodo = (req, res) => {
    console.log("PUT /todos/")

    // get the param id from the route
    let myId = req.params.id;
    // let currentBody = req.body;
    let description = req.body.description;
    let completed = req.body.completed == true;

    //find the item that matches the id
    let matchingItem = db.find( (item, index) => {
        return item.id == myId
    })

    // to update description, get the req.body.description
    
    //if found, put the completed var into matchingItem

    if (description || completed) {
    //to update completed, get the req.body.completed
    // if true, setting it to completed variable
       
    //Sets new description equal to matching item, so it will change
        matchingItem.description = description;
        matchingItem.completed = completed;
        res.json(matchingItem)
    }
    else {
        res.send("Item not updated.")
    }


    //res.json(matchingItem)
    //otherwise, res.send("Item not updated")

}


//problem here
module.exports = {postTodo, getAllTodos, getTodoById, deleteTodo, updateTodo}
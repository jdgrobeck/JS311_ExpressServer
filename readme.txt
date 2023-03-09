back end
always running
listening for requests

Building five routes on app.js
   DONE 1. route that returns all todos in our list
        GET /todos
        return an array of todo objects (res.send)
    
    DONE 2. route that returns a single todo based on the id provided
        GET /todos/:id
            :id is the id of the todo to return if it exists
            otherwise return a message saying "ID not found"

     3. route that will DELETE a single todo based on the id provided
        DELETE /todos/:id
            :id is the id of the todo that was deleted
            return message with the item that was deleted 

    DONE 4. route that adds a single todo to the list
        POST /todos
            body should include an object that has at least a description
            we'll make a function that generates a random id that's added when the new todo is created
            ex: body: {"description" : "feed the dog"}

    5. route that updates (PUT) an existing todo (need id)
        PUT /todos/:id
        ex: todos/10, body={"description": "buy groceries", "completed": true}

    POST and PUT use the body

    todo object should have:

    - id: id of the todo item
    - description: what the todo is
    - completed: true or false

    Math.random() // generates a random number between 0 and 1
# todo-backend-nodejs-mongodb
This is the Backend part of a Full-Stack project using nodeJS, expressJS and mongoDB.
 - [Project in production](https://todo-backend-nodejs-mongodb-production.up.railway.app/tasks)

## Available Commands
 - npm run dev ---> Run the server without compiling in babel (checked)
 - npm run devbabel ---> Run the server by compiling babel (without checking)
 - npm run build ---> Compiles all code to be compatible with all node interpreters (checked)
 - npm start ---> Run the server in production mode (checked)

## Environment Variables
 - DB_USER provided by mongoDB Atlas
 - DB_PASSWORD provided by mongoDB Atlas
 - PORT define or change it yourself

## Available Routes
### Main Routes:
 - "/" ---> GET method => Main path with link
 - "/tasks" ---> GET method => Returns JSON with all collections tasks in mongoDB
 - "/tasks/:author/delete" ---> DELETE method => Delete all invited tasks
### Routes API:
 - "/api/tasks" ---> GET method => Return JSON with all collection tasks in mongoDB
 - "/api/tasks/add" ---> POST method => Added task in mongoBD
 - "/api/tasks/:id/edit" ---> PUT method => The edit task of the method with the id
 - "/api/tasks/:id/toggleDone" ---> PUT method => Changed toggle from task
 - "/api/tasks/:id/delete" ---> DELETE method => Deleted task with id

## Questions
 - Do i want to use my database? 
> Answer: Change in src/database.js line 8 with your mongoDB_URI
 - Did your server stop responding in production?
> Answer: Most likely it went into hibernation mode, if the online service stops responding, please let me know by DM on Instagram
 - Does your database have a clean command?
> Answer: By default it has 5 documents, please don't delete them, but the rest of the tasks have a invited author, if the result has more than 5 documents, let me know on my social networks or execute the delete method to the path /tasks/invited/delete
 - Can we collaborate on a project?
> Answer: Of course, more than anything if you are a junior developer, you can contact me through my social networks that are below

## Social Networks
 - [Instagram](https://www.instagram.com/ynohtna.dev/)
 - [Facebook](https://www.facebook.com/people/Anthony-Madariaga/100080874905011/)
 - [Linkedin](https://www.linkedin.com/in/elliotanthonymadariaga)
 - [Github](https://github.com/elliotanthony39)
 - [Hotmail](mailto:elliotant_tony@hotmail.com)
 - [Gmail](mailto:elliotanthonydev@gmail.com)
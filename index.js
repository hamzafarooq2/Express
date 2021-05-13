const express = require('express');
const path = require('path');
const students = require('./Students')
const logger = require('./middleware/logger')


const app = express();



// Init middleware

// app.use(logger);

// Gets all students in postman
app.get('/api/students', (req, res) => res.json(students)
);

// app.get('/', (req,res) => {
//     res.send(`<h1> Hello Hama </h1>`);
// });

// Set static folder

app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 5000;  // port number is available in the enviornment if not than check port no..

app.listen(PORT, () => {
    console.log(`My port number is ${PORT}`);

}); 
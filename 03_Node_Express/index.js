const express = require('express');
const app = express();

// use express json-parser to parse received data
app.use(express.json());

// hardcoded data
var personsData = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

const homepage = "<h1>This is the backend for PhoneBook</h1>";


// helpers
function l(arg1, arg2) {
	( arg1, arg2 ) ? 
		console.log(arg1, arg2) : 
		console.log(arg1)
};


// handling requests
// root
app.get('/', (request, response) => {
  response.send(homepage);
});

// persons#index
app.get('/api/persons', (request, response) => {
  response.json(personsData);
});

// persons#show 



// persons#delete



const PORT = 3003;
app.listen(PORT);
l(`Server running on port ${PORT}`);




const express = require('express'); //import 
const app = express(); //create express app
const port = 3000; // port #

app.get('/message', (req, res) => {
    res.json({message: "HELLOOO, WORLD"});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Event Loops, Callbacks and promises and async. It is mmore benefitial because asynchronus operations let Node.js handle multiple tasks at once.


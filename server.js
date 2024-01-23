const express = require('express');
const path = require('path');
const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log('Server started on port', PORT);
})

// work on getting all the question prompts done, then add in submit button and hook everything up to the backend
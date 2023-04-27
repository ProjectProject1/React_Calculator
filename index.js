const express = require('express');
const app = express();
const port = 3002;

// add folder calcul_project/builds
app.use(express.static('calcul_project/builds'));
// app.use()

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/calc', (req, res) => {
//     res.sendFile(__dirname + '/calcul_project/builds/calculator.html');
//     // res.sendFile(__dirname + '/calculator.html');
// });

app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`);
});
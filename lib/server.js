const StudentController = require("./controllers/StudentController");
const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());


app.get('/v1/students', (req, res) => {
    const allStudents = StudentController.getAllStudents()
    res.json(allStudents);
});


app.listen(port, () => {
    console.log("Escuchando por el puerto", port);
});
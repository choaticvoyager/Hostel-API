import express from "express"; 
import studentInfo from "./info/students.js";
import bodyParser from 'body-parser'; 

const app = express(); 
const PORT = 8000; 

app.use(bodyParser.json());
app.use('/students', studentInfo);

app.get('/', (req, res) => {
    console.log("Home page");
    res.send("Welcome to Home page!");
});

app.listen(PORT, ()=>{ 
    console.log(`Server is running on http://localhost:${PORT}...`); 
});


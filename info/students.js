import express from "express";
//import {readFileSync} from "fs"; 
import { v4 as uuidv4 } from 'uuid'; 
import { createStudent, getStudents, getStudent, deleteStudent, updateStudent } from "../controllers/students.js";

const router = express.Router();
//const students = JSON.parse(readFileSync('./students.json','utf8'));  
//let students = [];
/*
let students = {};

router.get('/', (req,res)=>{ 
    console.log("Student info");
    res.send(students); 
});

router.post('/',(req,res) =>{ 
    console.log("Post request received"); 
    res.send("Message posted successfully"); 
});
    
router.post('/',(req,res) =>{ 
    const student = req.body;
    students.push(student); 
    res.send(`${student.name} has been added to the database`); 
});
    
router.post('/', (req, res) => {
    const student = {...req.body,id: uuidv4()}; 
    students.push(student); 
    res.send(`${student.name} has been added to the database`); 
});

router.get('/:id', (req,res)=>{ 
    const foundStudent = students.find(student => student.id === req.params.id); 
    res.send(foundStudent); 
}); 

router.delete('/:id',(req,res) =>{ 
    students = students.filter(student => student.id !== req.params.id); 
    res.send(`Student with the id ${req.params.id} deleted from the database`); 
});

router.patch('/:id',(req, res) =>{ 
    const foundStudent = students.find(student => student.id === req.params.id); 
    const {regNo, name, roomNumber, course, checkInDate} = req.body; 
    if(regNo) foundStudent.regNo= regNo;  
    if(name) foundStudent.name= name;  
    if(roomNumber) foundStudent.roomNumber = roomNumber;  
    if(course) foundStudent.course = course;  
    if(checkInDate) foundStudent.checkInDate = checkInDate;  
    res.send(`Student with the id ${req.params.id} has been updated.`); 
});
*/

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/',createStudent)
router.delete('/:id', deleteStudent);
router.patch('/:id',updateStudent);

export default router;

//Checking
import { v4 as uuidv4 } from 'uuid';

// Use object instead of array
let students = {};

// CREATE student
export const createStudent = (req, res) => {
    const id = uuidv4();
    const student = { id, ...req.body };

    students[id] = student;

    res.send(`${student.name} has been added to the database`);
};

// GET all students
export const getStudents = (req, res) => {
    res.send(Object.values(students));
};

// GET single student
export const getStudent = (req, res) => {
    const student = students[req.params.id];

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.send(student);
};

// DELETE student
export const deleteStudent = (req, res) => {
    if (!students[req.params.id]) {
        return res.status(404).send("Student not found");
    }

    delete students[req.params.id];

    res.send(`Student with the id ${req.params.id} deleted from the database`);
};

// UPDATE student
export const updateStudent = (req, res) => {
    const student = students[req.params.id];

    if (!student) {
        return res.status(404).send("Student not found");
    }

    const { regNo, name, roomNumber, course, checkInDate } = req.body;

    if (regNo) student.regNo = regNo;
    if (name) student.name = name;
    if (roomNumber) student.roomNumber = roomNumber;
    if (course) student.course = course;
    if (checkInDate) student.checkInDate = checkInDate;

    res.send(`Student with the id ${req.params.id} has been updated.`);
};
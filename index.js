// alert("hello")
// console.log('are you working')

//make a classroom?
'use strict';
//arrays are list objects

//we are going to need a classroom
let classroom = [];
//we are going to need students
let students = ["Zion","Lindsey","Jordan","Tyler","Curtrick","Michael","Lizzy"]

//we will need a way to add the students to the classroom
function AddStudentsToClassRoom(studentsArray,classroomArray){
    let greeting = "Good Morning everyone, My name is "
//add students to the classroom
for(let i = 0; i < studentsArray.length; i++){
    // console.log(studentsArray[i])
    classroomArray.push(studentsArray[i])
    // console.log(`${greeting+studentsArray[i]}`)
    //console.log(`${greetings} + ${studentsArray[i]}`)
    console.log(greeting + studentsArray[i])
}
//  classroom.push('student1')
//  classroom.push('student2')
//  classroom.push('student3')
//  classroom.push('student4')
//  classroom.push('student5')
//  classroom.push('student6')
//  classroom.push('student7')
//  console.log(classroom)
}
//call our function
AddStudentsToClassRoom(students,classroom)
 // once the students are in the classroom, each student is going to greet the class



//an array consists of items that are key/value pairs
//`` templet literals 
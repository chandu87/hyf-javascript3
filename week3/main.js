console.log('main.js');
const initialStudents = [ 'niels', 'mads' ];
const room = '3a';

const students = StudentsFactory(initialStudents, room);
// { add, delete ...... }

students.add('younes');
// add name to the studens array // [ 'niels', 'mads', 'younes' ]
students.add('johnny');
// same // [ 'niels', 'mads', 'younes', 'johnny' ]

students.delete('younes');
// delete // [ 'niels', 'mads', 'johnny' ]

students.printAll();
// 3a
// niels, mads, johnny

students.deleteAll();
// []

students.printAll();
// 3a
//  print all the names ''

students.changeRoom('3b');

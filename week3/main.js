const initialStudents = ["niels", "mads"];
const room = "3a";

const students = StudentsFactory(initialStudents, room);
// { add, delete ...... }
function StudentsFactory(initialStudents, room) {
  let totalStudents = initialStudents,
    classRoom = room;
  const addStudent = student => {
    totalStudents.push(student);
    console.log(`Added student ${student} to Class room : ${totalStudents}`);
  };
  const deleteStudent = student => {
    const index = totalStudents.indexOf(student);
    if (index != -1) {
      totalStudents.splice(index, 1);
      console.log(`Deleted student ${student} from Class : ${totalStudents}`);
    } else {
      console.log(`Student ${student} not found in the class room`);
    }
  };
  const printAll = () => {
    console.log(
      `Class room : ${classRoom} and Total students array is :  [${totalStudents}]`
    );
  };
  const deleteAll = () => {
    totalStudents = [];
  };
  const changeRoom = newRoom => {
    classRoom = newRoom;
    console.log(classRoom);
  };
  return {
    add: addStudent,
    delete: deleteStudent,
    printAll: printAll,
    deleteAll: deleteAll,
    changeRoom: changeRoom
  };
}

students.add("younes");
// add name to the studens array // [ 'niels', 'mads', 'younes' ]
students.add("johnny");
// same // [ 'niels', 'mads', 'younes', 'johnny' ]

students.delete("younes");
// delete // [ 'niels', 'mads', 'johnny' ]

students.printAll();
// 3a
// niels, mads, johnny

students.deleteAll();
// []

students.printAll();
// 3a
//  print all the names ''

students.changeRoom("3b");

function StudentList() {
  const students = [
    { id: 1, name: "Jay" },
    { id: 2, name: "Harsh" },
    { id: 3, name: "Ravi" },
    { id: 4, name: "Sneha" },
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default StudentList;

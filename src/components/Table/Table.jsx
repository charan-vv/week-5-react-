import React from 'react';

const StudentTable = () => {
  const students = [
    { id: 1, name: 'hii', score: 85 },
    { id: 2, name: 'hello', score: 90 },
    { id: 3, name: 'charan', score: 78 },
    { id: 4, name: 'good ', score: 92 },
    { id: 5, name: 'Morning', score: 87 },
    { id: 6, name: 'had', score: 80 },
    { id: 7, name: 'tiffin', score: 95 },
    { id: 8, name: 'else', score: 88 },
    { id: 9, name: 'go and', score: 83 },
    { id: 10, name: 'eat', score: 91 }
  ];

  return (
    <>
    <div className='table table-striped '> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
    </div>
    </>
  );
};

export default StudentTable;

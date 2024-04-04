import React from 'react';

const Table = () => {
  const students = [
    { id: 1, name: 'hii' },
    { id: 2, name: 'hello'},
    { id: 3, name: 'charan'},
    { id: 4, name: 'good ' },
    { id: 5, name: 'Morning' },
    { id: 6, name: 'had' },
    { id: 7, name: 'tiffin' },
    { id: 8, name: 'else' },
    { id: 9, name: 'go and' },
    { id: 10, name: 'eat' }
  ];

  return (
    <>
    <div className=' container mt-5 table table-striped '> 
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

export default Table;

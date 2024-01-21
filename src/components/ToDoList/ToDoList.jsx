// import React from 'react';

// function ToDoList({taskList}) {
//     return (
//         <>
//             <header>
//             <h1>To Do List</h1>
//             </header>
            
//             <div>{taskList.map((taskData, dataIndex) => {
//                     return (
//                       <div key={dataIndex}>
//                         {/* key prop needs to be a unique value */}
//                         <h3>{taskData.name}</h3>
//                         <p>{taskData.completed}</p>
//                       </div>
//                     );
//                   })}
//             </div>
//         </>      
//     );
// }

function ToDoList({taskList}) {
    return (
        <>
            <header>
            <h1>To Do List</h1>
            </header>
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map(task => (
                        <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.completed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>      
    );
}
export default ToDoList;
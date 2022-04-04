import React, { Component } from 'react';

// Utilize a função Task dentro do componente App
const Task = (value) => {
  return (
    <li>{ value }</li>
  );
}
// Leia as tarefas de dentro de um Array
const taskList = ['Task 1', 'Task 2', 'Task 3'];

class App extends Component {
  render() {
    return (
      <ul>
        {/* Use a função map para criar cada item da lista no HTML */}
       { taskList.map((task) => Task(task)) }
      </ul>
    );
  }
}

export default App;


import styles from './App.css';
import {useState} from 'react';
import {TaskOut} from './taskOut.js';

function App() {
  const [todoList, updateTodo] = useState([]);
  const [inputValue, updateValue] = useState ('');

  const getInput = (e) => {
    updateValue(e.target.value);
  };

  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1: todoList[todoList.length-1].id +1,
      taskName: inputValue,
      complete: false,
    }
   const newTodoList = [...todoList, task];
   updateTodo(newTodoList);
  }

  const completeTask = (id) => {
    updateTodo(
      todoList.map((task) => {
        if (task.id === id){
          return {...task, complete: true}
        } else {
          return task;
        }
      })
    );
  } ;
  

  const deleteTask = (taskId) => {
    const newlist = todoList.filter((task) => task.id !== taskId);
    updateTodo(newlist);
  }

  return (
    <div className = 'App'>
      <div className = 'input' style={{margin :30 ,backgroundColor:'blue', fontSize: '40px'}}>
        What Task ?
        <input  onChange={getInput}></input>
        <button onClick={addNewTask}>add To Do</button>
      </div>
        <div className = 'list' style={{backgroundColor: 'grey', fontSize: '30px'}}>
          {todoList.map((task)=> {
            return <TaskOut 
              taskName={task.taskName} 
              id={task.id} 
              completed={task.complete}
              deleteTask={deleteTask} 
              completeTask={completeTask}/>
          })}
      </div>
    </div>
  );
}



export default App;

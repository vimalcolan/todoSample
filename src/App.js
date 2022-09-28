import { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  const[todo,setTodo]=useState("");
  const[todoList,setTodoList]=useState([]);
  const[editId,setEditId]=useState("");

  // ---------------------Tracking changes in input field------------------------
  const handleChange=(e)=>{
    setTodo(e.target.value);
  }
   // ---------------------submitting value(both edit and add)------------------------
  const addTodo=(e)=>{
      e.preventDefault();
      if(editId){
        const editTodo=todoList.find((i)=>{return(i.name===editId)});
        const updateTodo=todoList.map((t)=>
            t.name==editTodo.name?(t={name:todo,completed:false}):{name:t.name,completed:false}
        );
        setTodoList(updateTodo);
        setEditId("");
        setTodo("");
        return;
      }
    if(todo!==""){
      setTodoList([...todoList,{name:todo,completed:false}]);
      setTodo("");
   }
  }
   // ---------------------Handling done or not------------------------
  const handleRead=(data)=>{
    const readTodo=todoList.find((i)=>{return(i.name===data.name)});
        const doneTodo=todoList.map((t)=>
            t.name==readTodo.name?(t={name:t.name,completed:true}):{name:t.name,completed:false}
        );
        setTodoList(doneTodo);
        console.log("done",doneTodo);
        return;
  }

   // ---------------------Handling delete------------------------
  const handleDelete=(data)=>{
   let remainingList=todoList.filter((e)=>{
   return( e.name!=data.name)
  });
   setTodoList(remainingList)
    }
     // ---------------------handling edit------------------------
    const handleEdit=(data)=>{
      let editItem=todoList.find((e)=>{
      return( e.name==data.name)
     });
      setTodo(editItem.name);
      setEditId(editItem.name);

       }

  return (
    <div className="App">
      <div className='todo-wrapper'>
        <h1>Add Todo</h1>
        <div className='todo-form'>
          <form onSubmit={addTodo}>
            <input className='form-control' type="text" onChange={handleChange} placeholder="Enter todo" value={todo}/>
            <button type="submit" value="Add Todo" className='btn btn-primary' >{editId?"Update todo":"Add Todo"}</button>
          </form>
        </div>
      </div>
      <h1 className='text-center'>Todo List</h1>
    <div className='list-wrapper'>
     
    {
      (todoList!=""&&Todolist!=null)?(
      todoList.map((data,index)=>{
        return(
          <Todolist key={index} data={data} handleRead={handleRead} handleDelete={handleDelete} handleEdit={handleEdit}/>
        )
      })):(<h5>No Todo Found</h5>)
     }
    </div>
    </div>
  );
}

export default App;

 import React from 'react';
    
 const Todos = ({todosArrayProp, delTodo}) => {

 const loopedTodos = todosArrayProp.length ? (
     
     todosArrayProp.map(tempElement =>{
         return (
             <div className="collection item" key = {tempElement.id}>
                 <span onClick ={() => {delTodo(tempElement.id)}}>{tempElement.content}</span>
             </div>
         )
     })
 ) : (
     <p1 className = "center"> You have no todos</p1>
 )

 console.log(loopedTodos);

     return (
         <div className="todos collection">
             {loopedTodos}
         </div>
     )
 }

 export default Todos;

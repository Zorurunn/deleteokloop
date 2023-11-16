import React, { useState } from 'react'

export const ListTodos = (props) => {

  return (
    <div>
      <ul>
      {props.todoItems.map(todoItem => {
      
        if (props.filterStatus === 1 && !todoItem.is_done) {
          return false
        }
        if (props.filterStatus === 2 && todoItem.is_done) {
          return false
        }
        return (
          <p key={todoItem.id}>

            <input 
              type="checkbox"
              checked={todoItem.is_done}
              onChange={e => {
                props.updateStatusTodoItem(todoItem.id)
              }}
            />
            
            {todoItem.title}

            <button
            class="fa-solid fa-circle-xmark"
              onClick={e => {
                props.removeTodoItem(todoItem.id)
              }}
            >
            </button>
          </p>
        )
      })}

      </ul>
    </div>
  )
}

// {props.todoItems.map(todoItem =>
//   <li key={todoItem.id}>
    
//     <input 
//       type="checkbox" 
//       checked={todoItem.is_done}
//       onChange={e => {
//         props.updateStatusTodoItem(todoItem.id)
//     }}
//     />

//     {todoItem.title}

//     <button
//        onClick={e => {
//         e.preventDefault()
//         props.removeTodoItem(todoItem.id)
//     }}
//     >削除</button>
//   </li>
//         )}

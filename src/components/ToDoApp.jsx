import React, { useState } from 'react'
import { InputToDo } from './InputToDo'
import { FilterToDos } from './FilterToDos'
import { ListTodos } from './ListTodos'

export const ToDoApp = () => {

  const [todoItems, setTodoItems] = useState([])


  const addTodoItem = (title) => {
    setTodoItems([...todoItems,{id:todoItems.length+1, title:title, is_done:false}])
}

const updateStatusTodoItem = (id) => {
  setTodoItems(todoItems.map(todoItem => {
      if (todoItem.id === id) {
          todoItem.is_done = !todoItem.is_done
      }
      return todoItem
  }))
}

const [filterStatus, setFilterStatus] = useState(0)

const removeTodoItem = (id) => {
  setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
}


  return (
    <div>
      <InputToDo addTodoItem={addTodoItem}/>
      <FilterToDos setFilterStatus={setFilterStatus}/>
      <ListTodos todoItems={todoItems} updateStatusTodoItem={updateStatusTodoItem} removeTodoItem={removeTodoItem} filterStatus={filterStatus}/>
    </div>
  )
}

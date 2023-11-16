import React, { useState } from 'react'

export const InputToDo = (props) => {

  const [title, setTitle] = useState('')

  const handleChange = e => setTitle(e.target.value)

  const handleEnter = e => {
    if (e.key === 'Enter') {
      // 入力値が空白文字の場合終了
      if (!title.match(/\S/g) ) return;
      // ToDoAppクラスの「handleAdd」関数を実行
      props.addTodoItem(title)
      setTitle('')
    }
  }


  return (
    <div>
      <input
          type="text"
          placeholder="Enter to add new"
          value={title}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
    </div>
  )
}

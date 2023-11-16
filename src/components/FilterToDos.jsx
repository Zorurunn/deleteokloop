import React from 'react'

export const FilterToDos = (props) => {

  const all = () => {
        props.setFilterStatus(0)
    }
    const done = () => {
        props.setFilterStatus(1)
    }
    const unDone = () => {
        props.setFilterStatus(2)
    }
  return (
    <div>
       <button onClick={all}>ALL</button>
       <button onClick={done}>DONE</button>
       <button onClick={unDone}>ACTIVE</button>
    </div>
  )
}

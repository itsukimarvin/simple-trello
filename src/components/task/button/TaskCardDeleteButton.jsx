import React from 'react'
import { FaTimes } from 'react-icons/fa';

const TaskCardDeleteButton = ({taskCardslist, setTaskCardslist, taskCard}) => {

  const taskCardDeleteButton = (id) => {
    console.log(id)
    console.log(taskCardslist)
    setTaskCardslist(taskCardslist.filter((e) => e.id !== id));
  }

  return (
    <div>
      <button className="taskCardDelelteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}>
        <FaTimes />
      </button>
    </div>
  )
}

export default TaskCardDeleteButton


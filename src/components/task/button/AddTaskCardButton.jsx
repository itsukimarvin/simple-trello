import React from 'react'

const AddTaskCardButton = ({ taskCardslist, setTaskCardslist }) => {

  const addTaskCard = () => {
    const taskCardId = crypto.randomUUID();
    setTaskCardslist([...taskCardslist, {
      id: taskCardId,
      draggabuleId: `item${taskCardId}`,
    }])
  }

  return (
    <div className='addTaskCardButtonArea'>
      <button className="addTaskCardButton"
        onClick={addTaskCard} >+</button>
    </div>
  )
}

export default AddTaskCardButton

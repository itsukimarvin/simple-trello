import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [ isClick, setIsClick ] = useState(false);
  const [ inputCardTitle, setInputCardTitle ] = useState("Today");
 
  const handleClick = () => {
    setIsClick(true)
  }
  const handleChange = (e) => {
    setInputCardTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }
  const handleBlur = () => {
    setIsClick(false);
  }
  return (
    <div className="taskCardTitleInputArea" onClick={handleClick}>
      {isClick
        ? (
            <form onSubmit={handleSubmit}>
              <input className='taskCardTitleInput'
                type="text" value={inputCardTitle}
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength="10" />
            </form>
          )
        : <h3>{inputCardTitle}</h3>
      }
    </div>
  )
}

export default TaskCardTitle

import React from 'react'

const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputText === ""){
      return;
    }
    const taskId = crypto.randomUUID();
    setTaskList([
      ...taskList,
      { 
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      }]);
    setInputText("");
    
  }
  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="taskAddInput" type="text" placeholder='add a task' onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}

export default TaskAddInput

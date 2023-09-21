import React, { useState, createContext } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskAddInput from './input/TaskAddInput'
import Tasks from './Tasks'
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import { Draggable } from 'react-beautiful-dnd'

// export const TaskContext = createContext();

const TaskCard = ({taskCardslist, setTaskCardslist, taskCard, index}) => {
  const [ inputText, setInputText ] = useState("");
  const [ taskList, setTaskList ] = useState([]);

  return (
      <Draggable draggableId={taskCard.id} index={index}>
        {(provided) => (
          <div className="taskCard"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            {/* <TaskContext.Provider value={[taskList, setTaskList]}> */}
              <div className="taskCardTitleAndTaskCardDeleteButtonArea"
                {...provided.dragHandleProps}
              >
                <TaskCardTitle />
                <TaskCardDeleteButton
                  taskCardslist={taskCardslist}
                  setTaskCardslist={setTaskCardslist}
                  taskCard={taskCard}            
                />
              </div>
                <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList} />
                <Tasks taskList={taskList} setTaskList={setTaskList} />
            {/* </TaskContext.Provider> */}
          </div>
        )}
      </Draggable>
    )
}

export default TaskCard
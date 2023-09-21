import React, {useContext} from 'react'
import Task from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
// import { TaskContext } from "./TaskCard";

const reorder = (taskList, startIndex, endIndex) => {
    const remove = taskList.splice(startIndex, 1); // [1を削除, 2, 3]
    taskList.splice(endIndex, 0, remove[0]);// [2, 1を追加, 3]
};

const Tasks = ({taskList, setTaskList}) => {
  // const[ taskList ] = useContext(TaskContext);
  const handleDragEnd = (result) => {
    // console.log(result);
    const _taskList = [... taskList];
    // const remove = _taskList.splice(result.source.index, 1); // [1を削除, 2, 3]
    // _taskList.splice(result.destination.index, 0, remove[0]);// [2, 1を追加, 3]

    // リファクタリング
    reorder(_taskList, result.source.index, result.destination.index);

    setTaskList(_taskList);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={crypto.randomUUID()} >
                  <Task 
                    index={index}
                    task={task} taskList={taskList} setTaskList={setTaskList}  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks

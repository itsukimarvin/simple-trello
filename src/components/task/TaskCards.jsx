import React, { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskCardButton from './button/AddTaskCardButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList, startIndex, endIndex) => {
  const remove = taskCardsList.splice(startIndex, 1); // [1を削除, 2, 3]
  taskCardsList.splice(endIndex, 0, remove[0]);// [2, 1を追加, 3]
};

const TaskCards = () => {
  const [taskCardslist, setTaskCardslist] = useState([{
    id: "0",
    draggableId: "item0",
  }]);

  const handleDragEnd = (result) => {
    reorder(taskCardslist, result.source.index, result.destination.index);
    setTaskCardslist(taskCardslist);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div className='taskCardsArea' {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardslist.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCardslist={taskCardslist}
                setTaskCardslist={setTaskCardslist}
                taskCard={taskCard}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton taskCardslist={taskCardslist} setTaskCardslist={setTaskCardslist} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards

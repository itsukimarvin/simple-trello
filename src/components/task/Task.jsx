import React, {useContext} from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { FaTrashAlt } from 'react-icons/fa';
// import { TaskContext } from "./TaskCard";


const Task = ({task, taskList, setTaskList, index}) => {

  // const [ , taskList, setTaskList ] = useContext(TaskContext);

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div className='taskBox' key={task.id} ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
          <p className='taskText'>{task.text}</p>
          <button className='taskTrashButton'
            onClick={() => handleDelete(task.id)}
          >
            {/* <i class="fa-solid fa-trash-can"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
            <FaTrashAlt />
          </button>
        </div>

      )}
    </Draggable>
  )
}

export default Task

import React, { useState } from 'react'

const List = React.memo(({
  id, title, completed, todoData, setTodoData, provided, snapshot, handleClick
}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(id === id) {
        completed = !completed;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  };

  const handleEditChange = (event) => {
    setEditedTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.title = editedTitle
      }
      return data;
    })
    setTodoData(newTodoData)
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setIsEditing(false);
  }

  if(isEditing) {
    return(
      <div 
        className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
        <div className='items-center'>
          <form onSubmit={handleSubmit}>
            <input 
              className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
              onChange={handleEditChange}
              value={editedTitle} />
          </form>
        </div>
        <div>
          <button 
            className='px-4 py-2 float-right' 
            onClick={() => setIsEditing(false)}>X
          </button>
          <button 
            className='px-4 py-2 float-right' 
            type='submit'
            onClick={handleSubmit}>
            save
          </button>
        </div>
      </div>
    )
  } else {
    
    return (
      <div 
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
        key={id} {...provided.draggableProps} 
        ref={provided.innerRef} {...provided.dragHandleProps}>
        <div className='items-center'>
          <input 
            type="checkbox" 
            defaultChecked={completed} 
            onChange={() => handleCompleteChange(id)} />
          <span className={ completed ? "line-through" : undefined }>{title}</span>
        </div>
        <div>
          <button 
            className='px-4 py-2 float-right' 
            onClick={() => handleClick(id)}>X
          </button>
          <button 
            className='px-4 py-2 float-right' 
            onClick={() => setIsEditing(true)}>
            edit
          </button>
        </div>
      </div>
    )
  }
});

export default List
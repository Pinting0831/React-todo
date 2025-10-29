import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() === '') return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="input-text"
          />
          <button onClick={handleUpdate} className="btn">保存</button>
          <button onClick={() => setIsEditing(false)} className="btn btn-cancel">取消</button>
        </>
      ) : (
        <>
          <span 
            className={`todo-text ${todo.completed ? 'completed' : ''}`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} className="btn">修改</button>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-delete">刪除</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;

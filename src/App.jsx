import React, { useState } from 'react';
import TodoList from './TodoList';
import './index.css'; // 用來放 CSS

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');

  // 新增 Todo
  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // 修改 Todo
  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  // 刪除 Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 切換完成狀態
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // 搜尋 Todo
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">
      <h1>待辦事項</h1>

      {/* 搜尋 */}
      <input
        type="text"
        placeholder="搜尋待辦事項..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-search"
      />

      {/* 新增 */}
      <div className="input-add">
        <input
          type="text"
          placeholder="輸入新待辦事項"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-text"
        />
        <button onClick={addTodo} className="btn">新增</button>
      </div>

      {/* Todo 列表 */}
      <TodoList 
        todos={filteredTodos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
        toggleComplete={toggleComplete} 
      />
    </div>
  );
}

export default App;

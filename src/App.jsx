

import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [isDark,setIsDark]=useState(false)
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const text = event.target.value.trim();
      if (text !== '') {
        setTodos([...todos, { text, completed: false }]);
        event.target.value = ''; 
      }
    }
  };

  const handleRemoveCompleted = () => {
    const filteredTodos = todos.filter(todo => !todo.completed);
    setTodos(filteredTodos);
  };
  const darkmode=()=>{
    setIsDark(!isDark)
  }
  return (
    <>
      <div className={isDark ? 'salam' : 'background'}> 
        <div className='container'>
          <div className='todo'>
            <div className='head'><h2>TODO</h2>{isDark ? <i onClick={darkmode} class="fa-solid fa-sun"></i> : <i onClick={darkmode} className="fa-solid fa-moon"></i>}</div>
            <input className={isDark ? 'blackinput' : 'whiteinput'} type="text" placeholder='Create a new todo…' onKeyPress={handleKeyPress} />
          </div>
          <TodoList style={isDark ? 'darkinput': 'input'} todos={todos} setTodos={setTodos} filter={filter} />

          <div className={isDark ? 'huhuh input__foot' : 'input__foot'}>
            <button className='all' style={{background:"transparent",color:"lime"}} onClick={() => setFilter('All')}>All</button>
            <button className='active' style={{background:"transparent",color:"lime"}} onClick={() => setFilter('Active')}>Active</button>
            <button className='completed' style={{background:"transparent",color:"lime"}} onClick={() => setFilter('Completed')}>Completed</button>
            <button className='clearAll' style={{background:"transparent",color:"lime"}} onClick={handleRemoveCompleted}>Clear Completed</button>
          </div>  
        </div>
      </div>
    </>
  );
}

export default App;






















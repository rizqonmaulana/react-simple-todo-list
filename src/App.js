import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Todo from './pages/Todo'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './css/app.css';
import Form from './components/form.js';

function App() {
  return (
    <div className="App">
      <h1 className="title">To-Do List</h1>
      <div className="wapper__to-do">
        <div className="wapper__links">
          <ul>
            <li>
              <button className="to-do__link active">Create New Task</button>
              </li>
            <li>
              <button className="to-do__link">All Task</button>
              </li>
            <li>
              <button className="to-do__link">Pending Task</button>
              </li>
            <li>
            <button className="to-do__link">Completed Task</button>
            </li>
          </ul>
        </div>

        <div className="wapper-form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

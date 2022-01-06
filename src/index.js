import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

// Respository
import taskRepository from './service/task_repository';


ReactDOM.render(
  <React.StrictMode>
    <App
      taskRepository={taskRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
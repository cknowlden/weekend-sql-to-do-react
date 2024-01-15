import {useState, useEffect} from 'react';
import React from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDoList from '../ToDoList/ToDoList';
import './App.css';

function App () {
  return (
      <div className='dashboard'>
          <Header />
          <AddToDo />
          <ToDoList />
      </div>
  );
}

export default App

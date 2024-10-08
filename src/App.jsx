/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import TodoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


import {useState} from 'react';


function App() {
  
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>

      <TodoList tasks={tasks}/>

      <ToDoForm/>

    </SafeAreaView>
  );
}

export default App;

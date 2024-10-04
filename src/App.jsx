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

function App() {
  return (
    <SafeAreaView>

      <TodoList/>

      <ToDoForm/>

    </SafeAreaView>
  );
}

export default App;

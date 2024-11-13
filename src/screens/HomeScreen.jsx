import React from 'react';
import {
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import {useState} from 'react';

import TodoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
    
      const addTask = (task) => {
        setTasks([...tasks, task]);
      };
    
      return (
        <MainLayout>
            <SafeAreaView>

                <TodoList tasks={tasks}/>

                <ToDoForm addTask={addTask}/>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('About')}
                >
                    <Text style={styles.buttonText}>Go to About</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </MainLayout>
      );

}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


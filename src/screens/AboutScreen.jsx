import React from 'react';
import {
    Text,
    SafeAreaView,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';


const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
};


export default function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            <SafeAreaView>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>MyToDo App</Text>

                <Text style={{ fontSize: 18, marginTop: 10 }}>Today's date: {getCurrentDate()}</Text>

                <Text style={{ fontSize: 18, marginTop: 10 }}>Made by Alice Ivanova</Text>
            </SafeAreaView>
        </MainLayout>

    );
}



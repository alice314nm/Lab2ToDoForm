import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';



export default function Footer() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.footerText}>© 2024 MyToDo | author: Alice Ivanova.</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: 'gray',
    },
});

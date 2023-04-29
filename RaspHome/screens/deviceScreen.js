import React, { Component } from 'react';
import styles from '../style'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';


export default class HomeScreen extends Component {
    
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.deviceContainer}>
                    <Text style={styles.deviceText}>Lamp 1:</Text>
                    <TouchableOpacity onPress={this.deviceScreenNavigate}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>On</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.deviceScreenNavigate}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>Off</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.deviceContainer}>
                    <Text style={styles.deviceText}>Lamp 2:</Text>
                    <TouchableOpacity onPress={this.deviceScreenNavigate}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>On</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.deviceScreenNavigate}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>Off</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};
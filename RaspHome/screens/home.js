import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import styles from '../style'

export default class HomeScreen extends Component {

    deviceListNavigate = () => {
        this.props.navigation.navigate("Search Devices")
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>RaspHome</Text>

                <TouchableOpacity onPress={this.deviceListNavigate}>
                    <View style={styles.homeButton}>
                        <Text style={styles.buttonText}>Bluetooth</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._signUpNavigate}>
                    <View style={styles.homeButton}>
                        <Text style={styles.buttonText}>Web App</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}
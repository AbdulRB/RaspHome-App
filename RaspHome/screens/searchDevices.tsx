import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import styles from '../style'
import useBLE from './bluetoothDevices';
import { Device } from 'react-native-ble-plx';

export default function SearchScreen() {

    const {requestPermissions, scanForDevices, allDevices} = useBLE();

    // const hideModal = () => {
    //     setIsModalVisible(false);
    // };

    const openModal = async () => {
        requestPermissions((isGranted: boolean) => {
            if(isGranted) {
                scanForDevices()
            }
        })
    }

    // testFunction = () => {
    //     console.log("Connect working")
    // }
    
        return (
            <View style={styles.container}>
                <Text style={styles.normalText}>Please connect to a Raspberry Pi</Text>
                
                <TouchableOpacity onPress={openModal}>
                    <View style={styles.connectButton}>
                        <Text style={styles.buttonText}>Connect</Text>
                    </View>
                </TouchableOpacity>

                {allDevices.map((device: Device) => (
                    <Text>{device.name}</Text>
                ))}
            </View>
        )
    };
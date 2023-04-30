import React, { Component } from 'react';
import styles from '../style'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';


export default class DeviceScreen extends Component {
    
    constructor(props) {
        super(props);

        this.setRelayState = this.setRelayState.bind(this)
    }

    // componentDidMount() {
    //     this.unsubscribe = this.props.navigation.addListener('focus', () => {
    //         // console.log(this.getRelayState(1));
    //     });
    //   }

    // componentWillUnmount(){
    //     this.unsubscribe();
    // }

    // getRelayState = async (relayNumber) => {
    //     const response = fetch('http://192.168.1.20:8888/relays/'+ relayNumber, {
    //         mode: 'no-cors',
    //         method: 'GET',
    //     });
    //     const responseText = response.text();
    //     console.log(response);
    //     // return responseText === 'true' ? 'on' : 'off';
    // }

    // const getRelayState = async relayNumber => {
    //     const response = await fetch(`/relays/${relayNumber}`);
    //     const responseText = await response.text();
    //     return responseText === 'true' ? 'on' : 'off';
    //   };

    async getRelayState(relayNumber){
        const response = await fetch('http://192.168.1.20:8888/relays/'+ relayNumber, {
            mode: 'no-cors',
            method: 'GET',
        });
        const responseText = await response.text();
        console.log("this function is being called");
        return responseText === 'true' ? 'on' : 'off';
    };

    // setRelayState = (relayNumber, newState) => {
    //     return fetch('http://192.168.1.20:8888/relays/'+ relayNumber, {
    //         mode: 'no-cors',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           body: JSON.stringify({ state: newState })
    //     })
    //     .then(() => {
    //         console.log("Changed status of relay " + relayNumber + " to " + newState)
    //     })
    //   };

    setRelayState = async (relayNumber, newState) => {
        return fetch('http://192.168.1.20:8888/relays/'+ relayNumber, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ state: newState })
        });
    };

    testfunction() {
        console.log("working");
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.deviceContainer}>
                    <Text style={styles.deviceText}>Lamp 1:</Text>
                    <TouchableOpacity onPress={() => {this.setRelayState(1, true);}}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>On</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.setRelayState(1, false);}}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>Off</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.deviceContainer}>
                    <Text style={styles.deviceText}>Lamp 2:</Text>
                    <TouchableOpacity onPress={() => {this.setRelayState(2, true);}}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>On</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.setRelayState(2, false);}}>
                        <View style={styles.onButton}>
                            <Text style={styles.buttonText}>Off</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};
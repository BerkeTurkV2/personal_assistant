import React from 'react';
import { View, Text } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import { ThemedButton } from 'react-native-really-awesome-button';

import styles from "./MainStyles";


function Main() {
    return (
        <View style={styles.container} >
            <ThemedButton style={styles.button} width={300} borderRadius={12} backgroundColor='#3498db' name="bruce" type="primary">ÇALIŞMA</ThemedButton>
            <ThemedButton style={styles.button} width={300} borderRadius={12} backgroundColor='#e74c3c' name="bruce" type="primary">SPOR</ThemedButton>
            <ThemedButton style={styles.button} width={300} borderRadius={12} backgroundColor='#2ecc71' name="bruce" type="primary">LORD</ThemedButton>
            <ThemedButton style={styles.button} width={300} borderRadius={12} backgroundColor='#f39c12' name="bruce" type="secondary">BORSA</ThemedButton>
            <ThemedButton style={styles.button} width={300} borderRadius={12} backgroundColor='#9b59b6' name="bruce" type="primary">İNGİLİZCE</ThemedButton>
        </View>
    )
}
export default Main;
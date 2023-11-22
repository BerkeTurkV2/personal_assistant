import React from 'react';
import { View, Text } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';

import styles from "./MainStyles";

function Main({navigation}) {

    function goToWorkPage() {
        navigation.navigate("Work");
    }

    function goToSportPage() {
        navigation.navigate("Sport");
    }

    function goToLordPage() {
        navigation.navigate("Lord");
    }

    function goToExchangePage() {
        navigation.navigate("Exchange");
    }

    function goToEnglishPage() {
        navigation.navigate("English");
    }

    return (
        <View style={styles.container} >
            <ThemedButton onPress={goToWorkPage} style={styles.button} width={300} borderRadius={12} backgroundColor='#3498db' name="bruce" type="primary">ÇALIŞMA</ThemedButton>
            <ThemedButton onPress={goToSportPage} style={styles.button} width={300} borderRadius={12} backgroundColor='#e74c3c' name="bruce" type="primary">SPOR</ThemedButton>
            <ThemedButton onPress={goToLordPage} style={styles.button} width={300} borderRadius={12} backgroundColor='#2ecc71' name="bruce" type="primary">LORD</ThemedButton>
            <ThemedButton onPress={goToExchangePage} style={styles.button} width={300} borderRadius={12} backgroundColor='#f39c12' name="bruce" type="secondary">BORSA</ThemedButton>
            <ThemedButton onPress={goToEnglishPage} style={styles.button} width={300} borderRadius={12} backgroundColor='#9b59b6' name="bruce" type="primary">İNGİLİZCE</ThemedButton>
        </View>
    )
}
export default Main;
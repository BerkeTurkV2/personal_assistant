import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

import styles from "./SportInputStyles";

function SportInput({ name, value, onChangeText, onPress, totalNumber }) {
    return (
        <View>
            <View style={styles.container} >
                <Text style={styles.sportTitle}>{name}</Text>
                <View style={styles.sportAmount} >
                    <TextInput style={styles.input} underlineColorAndroid={"black"} keyboardType="numeric" value={value} onChangeText={onChangeText} />
                    <View style={styles.icon}>
                        <AwesomeButton raiseLevel={6} height={30} width={42} backgroundColor="green" backgroundDarker="#2f3030" onPress={onPress} >
                            <Text style={{ fontSize: 16, fontWeight: "bold" }} >+</Text>
                        </AwesomeButton>
                    </View>
                </View>
                <Text style={styles.sportTotal}>    {totalNumber}</Text>
            </View>
        </View>
    )
}

export default SportInput;
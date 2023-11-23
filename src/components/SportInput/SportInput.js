import React from "react";
import { View, Text, TextInput, Image, KeyboardAvoidingView } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";

import styles from "./SportInputStyles";

function SportInput({ name, value, onChangeText, onPress, totalNumber, image }) {
    return (
        <KeyboardAvoidingView  >
            <View style={styles.container} >
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                    <Text style={styles.sportTitle}>{name}</Text>
                    <Image source={image} style={styles.image} resizeMode="contain" />
                </View>

                <View style={styles.sportAmount} >
                    <TextInput style={styles.input} underlineColorAndroid={"black"} keyboardType="numeric" value={value} onChangeText={onChangeText} />
                    <View style={styles.icon}>
                        <AwesomeButton raiseLevel={6} height={30} width={42} backgroundColor="#52bf90" backgroundDarker="#2f3030" onPress={onPress} >
                            <Text style={{ fontSize: 16, fontWeight: "bold" }} >+</Text>
                        </AwesomeButton>
                    </View>
                </View>
                <Text style={styles.sportTotal}>       {totalNumber}</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SportInput;
import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert } from "react-native";
import { ThemedButton } from 'react-native-really-awesome-button';
import Icon from "react-native-vector-icons/Fontisto";
import SportInput from "../../components/SportInput/SportInput";

import styles from "./SportStyles";

function Sport() {

    const [enteredSinav, setEnteredSinav] = useState("");
    const [dailyTotalSinav, setDailyTotalSinav] = useState(0);

    const [enteredMekik, setEnteredMekik] = useState("");
    const [dailyTotalMekik, setDailyTotalMekik] = useState(0);

    const [enteredSquat, setEnteredSquat] = useState("");
    const [dailyTotalSquat, setDailyTotalSquat] = useState(0);

    const [enteredAgirlik, setEnteredAgirlik] = useState("");
    const [dailyTotalAgirlik, setDailyTotalAgirlik] = useState(0);

    const [enteredPlank, setEnteredPlank] = useState("");
    const [dailyTotalPlank, setDailyTotalPlank] = useState(0);

    const [enteredYürüyüs, setEnteredYürüyüs] = useState("");
    const [dailyTotalYürüyüs, setDailyTotalYürüyüs] = useState(0);

    const handleSinavInput = (input) => {
        setEnteredSinav(input);
    };

    const handleAdditionSinav = () => {
        const number = parseInt(enteredSinav);
        if (!isNaN(number)) {
            setDailyTotalSinav(dailyTotalSinav + number);
            setEnteredSinav('');
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleMekikInput = (input) => {
        setEnteredMekik(input);
    };

    const handleAdditionMekik = () => {
        const number = parseInt(enteredMekik);
        if (!isNaN(number)) {
            setDailyTotalMekik(dailyTotalMekik + number);
            setEnteredMekik('');
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleSquatInput = (input) => {
        setEnteredSquat(input);
    };

    const handleAdditionSquat = () => {
        const number = parseInt(enteredSquat);
        if (!isNaN(number)) {
            setDailyTotalSquat(dailyTotalSquat + number);
            setEnteredSquat('');
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleAgirlikInput = (input) => {
        setEnteredAgirlik(input);
    };

    const handleAdditionAgirlik = () => {
        const number = parseInt(enteredAgirlik);
        if (!isNaN(number)) {
            setDailyTotalAgirlik(dailyTotalAgirlik + number);
            setEnteredAgirlik('');
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handlePlankInput = (input) => {
        setEnteredPlank(input);
    };

    const handleAdditionPlank = () => {
        const number = parseInt(enteredPlank);
        if (!isNaN(number)) {
            setDailyTotalPlank(dailyTotalPlank + number);
            setEnteredPlank('');
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleYürüyüsInput = (input) => {
        setEnteredYürüyüs(input);
    };

    const handleAdditionYürüyüs = () => {
        const number = parseInt(enteredYürüyüs);
        if (!isNaN(number)) {
            setDailyTotalYürüyüs(dailyTotalYürüyüs + number);
            setEnteredYürüyüs('');
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const currentDate = new Date();

    // Tarihi özel bir formata çevirmek (örneğin: "21.11.2023 Salı")
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dateFormat = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${days[currentDate.getDay()]}`;

    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
                <View style={styles.topDate}>
                    <Icon style={styles.icon} name={"date"} size={18} color={"black"} />
                    <Text style={styles.date}>{dateFormat}</Text>
                </View>
                <View style={styles.topTitles} >
                    <Text style={styles.topNames}>Spor</Text>
                    <Text style={styles.topNames}>Miktar</Text>
                    <Text style={styles.topNames}>Toplam</Text>
                </View>
                <SportInput name={"Şınav"} value={enteredSinav} onChangeText={handleSinavInput} onPress={handleAdditionSinav} totalNumber={dailyTotalSinav} />
                <View style={styles.separotor} />
                <SportInput name={"Mekik"} value={enteredMekik} onChangeText={handleMekikInput} onPress={handleAdditionMekik} totalNumber={dailyTotalMekik} />
                <View style={styles.separotor} />
                <SportInput name={"Squat"} value={enteredSquat} onChangeText={handleSquatInput} onPress={handleAdditionSquat} totalNumber={dailyTotalSquat} />
                <View style={styles.separotor} />
                <SportInput name={"Ağırlık"} value={enteredAgirlik} onChangeText={handleAgirlikInput} onPress={handleAdditionAgirlik} totalNumber={dailyTotalAgirlik} />
                <View style={styles.separotor} />
                <SportInput name={"Plank"} value={enteredPlank} onChangeText={handlePlankInput} onPress={handleAdditionPlank} totalNumber={dailyTotalPlank} />
                <View style={styles.separotor} />
                <SportInput name={"Yürüyüş"} value={enteredYürüyüs} onChangeText={handleYürüyüsInput} onPress={handleAdditionYürüyüs} totalNumber={dailyTotalYürüyüs} />
                <ThemedButton onPress={null} style={styles.button} width={200} height={50} borderRadius={12} backgroundColor='#5c6d7e' name="bruce" type="primary">Günü Tamamla</ThemedButton>
            </View>
            <View style={styles.bottomBox} >
                <View style={styles.bottomTitles} >
                    <Text style={styles.bottomTitle}>Tarih</Text>
                    <Text style={styles.topNames}>Şınav</Text>
                    <Text style={styles.topNames}>Mekik</Text>
                    <Text style={styles.topNames}>Squat</Text>
                    <Text style={styles.topNames}>Ağırlık</Text>
                    <Text style={styles.topNames}>Plank</Text>
                    <Text style={styles.topNames}>Yürüyüş</Text>
                </View>
            </View>
        </View>
    )
}

export default Sport;
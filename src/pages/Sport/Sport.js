import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, Alert, ScrollView, Button } from "react-native";
import { ThemedButton } from 'react-native-really-awesome-button';
import Icon from "react-native-vector-icons/Fontisto";
import SportInput from "../../components/SportInput/SportInput";

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./SportStyles";

const dailyActivityModel = {
    date: '',
    sinav: 0,
    mekik: 0,
    squat: 0,
    agirlik: 0,
    plank: 0,
    yürüyüs: 0,
};

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

    const [dailyActivities, setDailyActivities] = useState([]);


    useEffect(() => {
        const retrieveData = async () => {
            try {
                const storedTotalSinav = await AsyncStorage.getItem('dailyTotalSinav');
                if (storedTotalSinav !== null) {
                    setDailyTotalSinav(parseInt(storedTotalSinav));
                }
                const storedTotalMekik = await AsyncStorage.getItem('dailyTotalMekik');
                if (storedTotalMekik !== null) {
                    setDailyTotalMekik(parseInt(storedTotalMekik));
                }
                const storedTotalSquat = await AsyncStorage.getItem('dailyTotalSquat');
                if (storedTotalSquat !== null) {
                    setDailyTotalSquat(parseInt(storedTotalSquat));
                }
                const storedTotalAgirlik = await AsyncStorage.getItem('dailyTotalAgirlik');
                if (storedTotalAgirlik !== null) {
                    setDailyTotalAgirlik(parseInt(storedTotalAgirlik));
                }
                const storedTotalPlank = await AsyncStorage.getItem('dailyTotalPlank');
                if (storedTotalPlank !== null) {
                    setDailyTotalPlank(parseInt(storedTotalPlank));
                }
                const storedTotalYürüyüs = await AsyncStorage.getItem('dailyTotalYürüyüs');
                if (storedTotalYürüyüs !== null) {
                    setDailyTotalYürüyüs(parseInt(storedTotalYürüyüs));
                }
                const storedActivities = await AsyncStorage.getItem('dailyActivities');
                if (storedActivities !== null) {
                    setDailyActivities(JSON.parse(storedActivities));
                }
            } catch (error) {
                console.error('AsyncStorage hatası:', error);
            }
        };

        retrieveData();
    }, []);

    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
            console.log('AsyncStorage temizlendi.');
        } catch (error) {
            console.error('AsyncStorage temizleme hatası:', error);
        }
    };

    const handleSinavInput = (input) => {
        setEnteredSinav(input);
    };

    const handleAdditionSinav = async () => {
        const number = parseInt(enteredSinav);
        if (!isNaN(number)) {
            setDailyTotalSinav(dailyTotalSinav + number);
            setEnteredSinav('');

            try {
                await AsyncStorage.setItem('dailyTotalSinav', JSON.stringify(dailyTotalSinav + number));
            } catch (error) {
                console.error('AsyncStorage hatası:', error);
            }
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleMekikInput = (input) => {
        setEnteredMekik(input);
    };

    const handleAdditionMekik = async () => {
        const number = parseInt(enteredMekik);
        if (!isNaN(number)) {
            setDailyTotalMekik(dailyTotalMekik + number);
            setEnteredMekik('');

            try {
                await AsyncStorage.setItem('dailyTotalMekik', JSON.stringify(dailyTotalMekik + number));
            } catch (error) {
                console.error('AsyncStorage hatası:', error);
            }
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleSquatInput = (input) => {
        setEnteredSquat(input);
    };

    const handleAdditionSquat = async () => {
        const number = parseInt(enteredSquat);
        if (!isNaN(number)) {
            setDailyTotalSquat(dailyTotalSquat + number);
            setEnteredSquat('');

            try {
                await AsyncStorage.setItem('dailyTotalSquat', JSON.stringify(dailyTotalSquat + number));
            } catch (error) {
                console.error('AsyncStorage hatası:', error);
            }
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleAgirlikInput = (input) => {
        setEnteredAgirlik(input);
    };

    const handleAdditionAgirlik = async () => {
        const number = parseInt(enteredAgirlik);
        if (!isNaN(number)) {
            setDailyTotalAgirlik(dailyTotalAgirlik + number);
            setEnteredAgirlik('');

            try {
                await AsyncStorage.setItem('dailyTotalAgirlik', JSON.stringify(dailyTotalAgirlik + number));
            } catch (error) {
                console.error('AsyncStorage hatası:', error);
            }
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handlePlankInput = (input) => {
        setEnteredPlank(input);
    };

    const handleAdditionPlank = async () => {
        const number = parseInt(enteredPlank);
        if (!isNaN(number)) {
            setDailyTotalPlank(dailyTotalPlank + number);
            setEnteredPlank('');

            try {
                await AsyncStorage.setItem('dailyTotalPlank', JSON.stringify(dailyTotalPlank + number));
            } catch (error) {
                console.error('AsyncStorage hatası:', error);
            }
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleYürüyüsInput = (input) => {
        setEnteredYürüyüs(input);
    };

    const handleAdditionYürüyüs = async () => {
        const number = parseInt(enteredYürüyüs);
        if (!isNaN(number)) {
            setDailyTotalYürüyüs(dailyTotalYürüyüs + number);
            setEnteredYürüyüs('');

            try {
                await AsyncStorage.setItem('dailyTotalYürüyüs', JSON.stringify(dailyTotalYürüyüs + number));
            } catch (error) {
                console.error('AsyncStorage hatası:', error);
            }
        } else {
            Alert.alert('Lütfen geçerli bir sayi girin.');
        }
    };

    const handleAddition = async () => {
        const newDailyActivity = { ...dailyActivityModel, date: getFormattedDate2() };
        newDailyActivity.sinav = dailyTotalSinav;
        newDailyActivity.mekik = dailyTotalMekik;
        newDailyActivity.squat = dailyTotalSquat;
        newDailyActivity.agirlik = dailyTotalAgirlik;
        newDailyActivity.plank = dailyTotalPlank;
        newDailyActivity.yürüyüs = dailyTotalYürüyüs;

        setDailyActivities([...dailyActivities, newDailyActivity]);

        try {
            await AsyncStorage.setItem('dailyActivities', JSON.stringify([...dailyActivities, newDailyActivity]));
        } catch (error) {
            console.error('AsyncStorage hatası:', error);
        }

        // Reset input values
        setEnteredSinav('');
        setEnteredMekik('');
        setEnteredSquat('');
        setEnteredAgirlik('');
        setEnteredPlank('');
        setEnteredYürüyüs('');

        // Reset daily totals
        setDailyTotalSinav(0);
        setDailyTotalMekik(0);
        setDailyTotalSquat(0);
        setDailyTotalAgirlik(0);
        setDailyTotalPlank(0);
        setDailyTotalYürüyüs(0);

        Alert.alert('Gün tamamlandı!');
    };

    const getFormattedDate = () => {
        const currentDate = new Date();
        const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${days[currentDate.getDay()]}`;
    };

    const getFormattedDate2 = () => {
        const currentDate = new Date();
        return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
    };

    const totalSinav = dailyActivities.reduce((total, activity) => total + activity.sinav, 0);
    const totalMekik = dailyActivities.reduce((total, activity) => total + activity.mekik, 0);
    const totalSquat = dailyActivities.reduce((total, activity) => total + activity.squat, 0);
    const totalAgirlik = dailyActivities.reduce((total, activity) => total + activity.agirlik, 0);
    const totalPlank = dailyActivities.reduce((total, activity) => total + activity.plank, 0);
    const totalYürüyüs = dailyActivities.reduce((total, activity) => total + activity.yürüyüs, 0);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <View style={styles.topDate}>
                        <Icon style={styles.icon} name={"date"} size={14} color={"black"} />
                        <Text style={styles.date}>{getFormattedDate()}</Text>
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
                    <ThemedButton onPress={handleAddition} style={styles.button} width={200} height={50} borderRadius={12} backgroundColor='#5c6d7e' name="bruce" type="primary">Günü Tamamla</ThemedButton>

                    <Button title="AsyncStorage'ı Temizle" onPress={clearAsyncStorage} />
                </View>
                <View style={styles.bottomBox} >
                    <View style={styles.bottomTitles} >
                        <Text style={styles.bottomDate}>Tarih</Text>
                        <Text style={styles.topNames}>Şınav</Text>
                        <Text style={styles.topNames}>Mekik</Text>
                        <Text style={styles.topNames}>Squat</Text>
                        <Text style={styles.topNames}>Ağırlık</Text>
                        <Text style={styles.topNames}>Plank</Text>
                        <Text style={styles.topNames}>Yürüyüş</Text>
                    </View>
                    {dailyActivities.map((activity, index) => (
                        <View key={index} >
                            <View style={styles.bottomDatas} >
                                <View style={{ flex: 1 }} >
                                    <Text style={styles.bottomDataNames} >{activity.date}</Text>
                                </View>
                                <View style={{ flex: 3, flexDirection: "row", }} >
                                    <Text style={styles.bottomDataNames}>{activity.sinav}</Text>
                                    <Text style={styles.bottomDataNames}>{activity.mekik}</Text>
                                    <Text style={styles.bottomDataNames}>{activity.squat}</Text>
                                    <Text style={styles.bottomDataNames}>{activity.agirlik}</Text>
                                    <Text style={styles.bottomDataNames}>{activity.plank}</Text>
                                    <Text style={styles.bottomDataNames}>{activity.yürüyüs}</Text>
                                </View>

                            </View>
                            <View style={styles.separotor2} />
                        </View>

                    ))}
                </View>
                <View style={styles.totalBox}>
                    <Text style={styles.bottomDate}>Toplamm</Text>
                    <Text style={styles.topNames}>{totalSinav}</Text>
                    <Text style={styles.topNames}>{totalMekik}</Text>
                    <Text style={styles.topNames}>{totalSquat}</Text>
                    <Text style={styles.topNames}>{totalAgirlik}</Text>
                    <Text style={styles.topNames}>{totalPlank}</Text>
                    <Text style={styles.topNames}>{totalYürüyüs}</Text>
                </View>
            </View>
        </ScrollView>

    )
}

export default Sport;
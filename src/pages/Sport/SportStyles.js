import { StyleSheet, Dimentions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    icon: {
        padding: 10,
    },
    topBox: {
        //flex: 1,
        backgroundColor: "#ecf0f1"
    },
    topDate: {
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "center"
    },
    topTitles: {
        flexDirection: "row", 
        alignContent: "center", 
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    topNames: {
        textDecorationLine: "underline",
    },
    bottomTitle: {
        textDecorationLine: "underline",
        paddingRight: 20,
    },
    separotor: {
        borderWidth: 0.4,
    },
    date: {
        fontSize: 16,
        fontWeight: "bold"
    },
    bottomBox: {
        backgroundColor: "#c0cdd1"
    },
    bottomTitles: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        padding: 10,
    },
    button: {
        alignSelf: "center",
        margin: 10
    }
})
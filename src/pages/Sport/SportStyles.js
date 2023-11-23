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
    bottomDate: {
        textDecorationLine: "underline",
        paddingRight: 40,
    },
    separotor: {
        borderWidth: 0.4,
    },
    separotor2: {
        borderBottomWidth: 0.4,
        marginTop: 4,
    },
    date: {
        fontSize: 14,
        fontWeight: "bold"
    },
    bottomBox: {
        backgroundColor: "#c0cdd1"
    },
    bottomTitles: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        padding: 10,
    },
    button: {
        alignSelf: "center",
        margin: 10
    },
    bottomDatas: {
        flexDirection: "row",
    },
    bottomDataNames: {
        flex:1,
        paddingLeft: 5,
    },
    totalBox: {
        backgroundColor: "#869495",
        flexDirection: "row"
    }
})
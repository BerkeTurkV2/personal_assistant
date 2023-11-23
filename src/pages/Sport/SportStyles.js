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
        flex: 4,
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
        color: "white",
        fontWeight: "bold",
    },
    bottomNames: {
        color: "white"
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
        flex: 1.4,
        backgroundColor: "#34495e" //#c0cdd1
    },
    bottomTitles: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    button: {
        alignSelf: "center",
        margin: 10,
    },
    bottomDatas: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    bottomDataNames: {
        flex:1,
        paddingLeft: 5,
        color: "black",
    },
    totalName: {
        flex:1,
        color: "white",
        fontWeight: "bold",
    },
    totalDatas: {
        flex:1,
        paddingLeft: 17,
        color: "white",
    },
    totalBox: {
        flex: 0.4,
        backgroundColor: "#005073",
    },
    image: {
        height: 50,
        width: 50,
    }
})
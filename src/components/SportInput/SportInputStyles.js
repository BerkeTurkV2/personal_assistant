import { StyleSheet, Dimentions } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        marginVertical:10,
    },
    sportTitle: {
        flex: 1,
        marginHorizontal: 4,
        fontWeight: "bold",
        fontSize: 14,
        color: "#34495e",
    },
    input: {
        backgroundColor: "white",
        fontSize: 16,
        padding: 5,
        width: 60,
        textAlign: "center",
    },
    icon: {
        paddingLeft: 10,
    },
    sportTotal: {
        flex: 1,
        textAlign: "center",
        paddingLeft: 0,
    },
    sportAmount: {
        flex:1, 
        flexDirection:"row", 
        alignItems: "center", 
        justifyContent: "center", 
        marginHorizontal: 16,
    },
    image: {
        //flex:1,
        height: 40,
        width: 50,
    }
})
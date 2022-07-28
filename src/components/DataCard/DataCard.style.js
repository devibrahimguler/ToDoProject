import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"flex-start",
        backgroundColor: "#85A35D",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
        borderRadius: 5,
    },
    close_container: {
        flex: 1,
        alignItems:"flex-start",
        backgroundColor: "#3A464E",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
        borderRadius: 5,
    },
    title: {
        color: "white",     
        fontSize: 20,
        marginHorizontal: 10,
    },
    close_title: {
        color: "#7F7F7F",     
        fontSize: 20,
        marginHorizontal: 10,
        textDecorationLine: "line-through",
    },
});
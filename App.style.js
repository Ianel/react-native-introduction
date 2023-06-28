import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#EEE",
        justifyContent: "center",
        padding: 20,
    },
    container: {
        height: 500,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    currencies: {
        justifyContent: "space-between",
        height: 160,
    },
    convert: {
        backgroundColor: "#00b0c7",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40,
        alignItems: "center",
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: "stretch",
        borderRadius: 40,
        borderColor: "#888",
        borderWidth: 2,
    },
    textConvert: {
        color: "white",
    },
});

export { s };

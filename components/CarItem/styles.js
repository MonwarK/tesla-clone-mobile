import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    carContainer: {
        display: "flex",
        width: "100%",
        height: Dimensions.get("window").height,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontWeight: "500"
    },
    subtitle: {
        fontSize: 16,
        color: "#5c5e62"
    },
    subtitleCTA: {
        marginTop: 5,
        fontSize: 16,
        color: "#5c5e62",
        textDecorationLine: "underline"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
    },
    buttonContainer: {
        marginBottom: 50
    }
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        top: 50,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: "contain"
    },
    menu: {
        width: 25,
        height: 25
    }
})
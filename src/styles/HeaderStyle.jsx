import { StyleSheet } from "react-native"

export const headerStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        minHeight: "10%"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold"
    },

    signInButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#248ad8"
    },

    signInButtonText: {
        textAlign: "center",
        color: "#f0f0f0",
        fontWeight: "bold"
    }
})

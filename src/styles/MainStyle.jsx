import { StyleSheet } from "react-native"

export const mainStyle = StyleSheet.create({
    // Success: "#4BB543"
    // Neutral: "#248ad8"
    // Error: "#ff5c5c"

    container: {
        flex: 1, 
        justifyContent: "center",
    },

    taskCard: {
        width: "95%",
        marginVertical: 10,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        borderLeftWidth: 5,
        borderColor: "#248ad8"
    },

    taskTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },

    taskDesc: {
        fontSize: 15
    },

    button: {
        backgroundColor: "#4BB543",
        borderRadius: 10,
        width: "80%",
        marginTop: 15,
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: 10,
        paddingHorizontal: 15
    },

    buttonText: {
        color: "#e2e2e2",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    }
}) 

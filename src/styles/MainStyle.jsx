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
        paddingVertical: 5,
        paddingLeft: 10,
        paddingRight: 15,
        borderLeftWidth: 5,
        borderColor: "#248ad8",
    },

    taskTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },

    taskDesc: {
        fontSize: 15
    },

    taskActionsView: {
        marginTop: 20
    },

    deleteTaskButton: {
        width: "60%",
        paddingVertical: 10,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: "#ff5c5c",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10
    },

    deleteTaskButtonText: {
        color: "#ff5c5c",
        textAlign: "center",
        fontWeight: "bold"
    },

    button: {
        backgroundColor: "#4BB543",
        borderRadius: 10,
        width: "80%",
        marginVertical: 15,
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

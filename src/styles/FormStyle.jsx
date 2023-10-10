import { StyleSheet } from "react-native"

export const formStyle = StyleSheet.create({
    // Success: "#4BB543"
    // Neutral: "#248ad8"
    // Error: "#ff5c5c"

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        marginBottom: 20,
        textAlign: "center",
        width: "80%",
        fontSize: 30,
        fontWeight: "bold"
    },

    subtitle: {
        textAlign: "center",
        width: "70%",
        fontSize: 15
    },
    
    input: {
        width: "70%",
        padding: 15,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "#248ad8"
    },

    inputError: {
        width: "70%",
        padding: 15,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "#ff5c5c"
    },

    inputSuccess: {
        width: "70%",
        padding: 15,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: "#4BB543"
    },
    
    buttonView: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 15,
        width: "70%",
        marginTop: 25
    },

    button: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    },

    actionButton: {
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#4BB543",
        borderRadius: 10
    },

    actionButtonText: {
        color: "#e2e2e2",
        textAlign: "center",
        fontWeight: "bold"
    },

    cancelButton: {
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: "#ff5c5c",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10
    },

    cancelButtonText: {
        color: "#ff5c5c",
        textAlign: "center",
        fontWeight: "bold"
    },

    disabledButton: {
        width: "80%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#d1d1d1",
        borderRadius: 10
    },

    disabledButtonText: {
        color: "#121212",
        textAlign: "center",
        fontWeight: "bold"
    }
})

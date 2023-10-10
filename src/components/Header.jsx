import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native"

export function Header({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>TodoEr</Text>

            <Pressable 
                style={styles.signInButton}
                onPress={() => { navigation.navigate("UserForm") }}
            >
                <Text style={styles.signInButtonText}>Entrar</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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

import { SafeAreaView, StyleSheet, Text, Pressable } from "react-native"
import { headerStyle } from "../styles/HeaderStyle"

export function Header({ navigation }) {
    return(
        <SafeAreaView style={headerStyle.container}>
            <Text style={headerStyle.title}>TodoEr</Text>

            <Pressable 
                style={headerStyle.signInButton}
                onPress={() => { navigation.navigate("UserForm") }}
            >
                <Text style={headerStyle.signInButtonText}>Entrar</Text>
            </Pressable>
        </SafeAreaView>
    )
}

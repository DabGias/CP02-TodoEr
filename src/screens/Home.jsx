import { SafeAreaView, Text, View } from "react-native"
import { Header } from "../components/Header"

export function Home({ navigation }) {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Header navigation={navigation}/>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Bem-vindo(a) ao TodoEr</Text>
            </View>
        </SafeAreaView>
    )
}

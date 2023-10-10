import { View, Text } from "react-native"
import { getUser } from "../../firebaseConfig"

export function Main() {
    const user = getUser()
    
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Você está logado como: {user["email"]}</Text>
        </View>
    )
}

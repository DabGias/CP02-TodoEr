import { useEffect, useState } from "react"
import { FlatList, Image, View, Text, Pressable, SafeAreaView } from "react-native"

function ProdtCard({ id, title, description, image, price }) {
    return(
        <View>
            <Image source={{ uri: image }}/>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}

export function Main({ navigation }) {
    const [prodts, setProdts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const resp = await fetch("https://fakestoreapi.com/products")

        setProdts(await resp.json())
    }

    return(
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FlatList
                
            />

            <View>
                <Pressable
                    onPress={() => { navigation.navigate('Favs') }}
                >
                    <Text>Ver meus favoritos</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

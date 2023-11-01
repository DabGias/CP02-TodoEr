import { useEffect, useState } from "react"
import { Pressable, FlatList, View, Text, SafeAreaView } from "react-native"
import { mainStyle } from "../styles/MainStyle"
import { remove, select } from "../../firebaseConfig"

function TaskCard({ id, title, description }) {
    return(
        <View style={mainStyle.taskCard}>
            <Text style={mainStyle.taskTitle}>{title}</Text>
            <Text style={mainStyle.taskDesc}>{description}</Text>
            <View style={mainStyle.taskActionsView}>
                <Pressable 
                    style={mainStyle.deleteTaskButton}
                    onPress={async () => {
                        await remove(id)
                    }}
                >
                    <Text style={mainStyle.deleteTaskButtonText}>Deletar tarefa</Text>
                </Pressable>
            </View>
        </View>
    )
}

export function Main({ navigation }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function fetchTasks() {
            setTasks(await select())
        }

        fetchTasks()
    })

    return(
        <SafeAreaView style={mainStyle.container}>
            {
                tasks.length === 0 ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text>Você não possui tarefas cadastradas!</Text>
                    </View>
                :
                    <FlatList
                        data={tasks}
                        keyExtractor={task => task["id"]}
                        renderItem={({ item }) => <TaskCard key={item["id"]} id={item["id"]} {...item.data()}/>}
                    />
            }
            <Pressable 
                style={mainStyle.button}
                onPress={() => { navigation.navigate("TaskForm") }}
            >
                <Text style={mainStyle.buttonText}>+ Adicionar uma nova tarefa</Text>
            </Pressable>
        </SafeAreaView>
    )
}

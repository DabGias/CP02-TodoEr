import { useState } from "react"
import { SafeAreaView, View, Pressable, Text } from "react-native"
import { formStyle } from "../styles/FormStyle"
import { CustomInput } from "../components/CustomInput"
import { getUser, insert } from "../../firebaseConfig"

export function TaskForm({ navigation }) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        user_email: getUser()["email"]
    })

    function setField(field, value) {
        setTask({ ...task, [field]: value })
    }

    function verifTitle() {
        return task["title"].trim() !== ""
    }

    function verifDescription() {
        return task["description"].trim() !== ""
    }

    function validate() {
        if (verifTitle() && verifDescription()) {
            return true
        } else {
            return false
        }
    }
    
    return(
        <SafeAreaView style={formStyle.container}>
            <Text style={formStyle.title}>Informe os dados da nova tarefa</Text>

            <CustomInput
                style={
                    task["title"].length > 0 ?
                        verifTitle() ?
                            formStyle.inputSuccess
                        :
                            formStyle.inputError
                    :
                        null
                }
                value={task["title"]}
                placeholder={"Título"}
                onChangeText={(value) => { setField("title", value) }}
                onEndEditing={validate}
            />

            <CustomInput
                style={
                    task["description"].length > 0 ?
                        verifDescription() ?
                            formStyle.inputSuccess
                        :
                            formStyle.inputError
                    :
                        null
                }
                value={task["description"]}
                placeholder={"Descrição"}
                onChangeText={(value) => { setField("description", value) }}
                onEndEditing={validate}
                multiline={true}
            />
            
            <View style={formStyle.buttonView}>
                <Pressable 
                    style={
                        validate() ?
                            formStyle.actionButton
                        :
                            formStyle.disabledButton
                    }
                    disabled={!validate()}
                    onPress={async () => { 
                        await insert(task)
                        navigation.navigate("Main")
                    }}
                >
                    <Text 
                        style={
                            validate() ?
                                formStyle.actionButtonText
                            :
                                formStyle.disabledButtonText
                        }
                    >
                        Entrar
                    </Text>
                </Pressable>

                <Pressable 
                    style={formStyle.cancelButton}
                    onPress={() => { navigation.navigate("Main") }}    
                >
                    <Text style={formStyle.cancelButtonText}>Cancelar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

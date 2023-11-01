import { useState } from "react"
import { SafeAreaView, Text, View, Pressable } from "react-native"
import { formStyle } from "../styles/FormStyle"
import { CustomInput } from "../components/CustomInput"
import { login } from "../../firebaseConfig"

export function UserForm({ navigation }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function setField(field, value) {
        setUser({ ...user, [field]: value })
    }

    function verifEmail() {
        return /\S+@\S+\.\S+/.test(user["email"].trim())
    }

    function verifPassword() {
        return user["password"].length >= 8
    }

    function validate() {
        if (verifEmail() && verifPassword()) {
            return true
        } else {
            return false
        }
    }

    return(
        <SafeAreaView style={formStyle.container}>
            <Text style={formStyle.title}>Preencha os campos com os dados requisitados</Text>
            <Text style={formStyle.subtitle}>Não se preocupe! Se não tiver um cadastro apenas preencha os campos com os dados de sua preferência. Seu cadastro será criado automaticamente!</Text>

            <CustomInput
                style={
                    user["email"].length > 0 ?
                        verifEmail() ?
                            formStyle.inputSuccess
                        :
                            formStyle.inputError
                    :
                        null
                }
                value={user["email"]}
                placeholder={"Email"}
                onChangeText={(value) => { setField("email", value) }}
                onEndEditing={validate}
                keyboardType={"email-address"}
                inputMode={"email"}
                autoCapitalize={"none"}
            />
            
            <CustomInput
                style={
                    user["password"].length > 0 ?
                        verifPassword() ?
                            formStyle.inputSuccess
                        :
                            formStyle.inputError
                    :
                        null
                }
                value={user["password"]}
                placeholder={"Senha"}
                onChangeText={(value) => { setField("password", value) }}
                onEndEditing={validate}
                secureTextEntry={true}
                autoCapitalize={"none"}
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
                        await login(user)
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
                    onPress={() => { navigation.navigate("Home") }}    
                >
                    <Text style={formStyle.cancelButtonText}>Cancelar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

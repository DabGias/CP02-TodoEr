import { TextInput } from "react-native"
import { formStyle } from "../styles/FormStyle"

export function CustomInput({ style, value, onChangeText, onEndEditing, editable, placeholder, keyboardType, maxLength, multiline, inputMode, secureTextEntry, autoCapitalize }) {
    return(
        <TextInput
            style={[formStyle.input, style ? style : null]}
            value={value}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing ? onEndEditing : null}
            editable={editable === false ? editable : true}
            placeholder={placeholder}
            keyboardType={keyboardType ? keyboardType : "default"}
            maxLength={maxLength ? maxLength : 1000}
            multiline={multiline ? multiline : false}
            inputMode={inputMode ? inputMode : "text"}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
            autoCapitalize={autoCapitalize ? autoCapitalize : "sentences"}
        />
    )
}

import { InputText } from "./style";

export function Input({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    KeyType,
    maxLength,
}) {
    return (
        <InputText
            placeholder={placeholder}
            editable={editable}
            KeyboardType={KeyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}
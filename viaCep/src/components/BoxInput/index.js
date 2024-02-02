import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    //definir props
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght 
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
        {/* //Label */}
        <Label textLabel={textLabel}/>

        {/* //Input */}
        <Input
            placeholder={placeholder}
            editable={editable}
            KeyType={KeyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
        />
        </FieldContent>
       
    )
}

export const BoxInputEstado = ({
    //definir props
    fieldWidth,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght 
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
        {/* //Label */}
        <Label textLabel={textLabel}/>

        {/* //Input */}
        <Input
            placeholder={placeholder}
            editable={editable}
            KeyType={KeyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
        />
        </FieldContent>
       
    )
}

export const BoxInputUf = ({
    //definir props
    fieldWidth,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    KeyType = 'default',
    maxLenght 
}) => {
    return (
        <FieldContent fieldWidth={fieldWidth}>
        {/* //Label */}
        <Label textLabel={textLabel}/>

        {/* //Input */}
        <Input
            placeholder={placeholder}
            editable={editable}
            KeyType={KeyType}
            maxLenght={maxLenght}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
        />
        </FieldContent>
       
    )
}

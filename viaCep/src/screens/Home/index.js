import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {
    //hooks - states
    //hoks - effect
        //chamada da api
    return (
        //ScrollForm
        //ContainerForm
        //BoxInput - label e input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='Informe o CEP'
                    placeholder='Cep...'
                    KeyType="numeric"
                    maxLenght={9}
                />
            </ContainerForm>
        </ScrollForm>
        
    )
}
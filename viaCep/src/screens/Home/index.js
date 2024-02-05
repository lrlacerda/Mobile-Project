import { useEffect, useState } from "react";
import { BoxInput, BoxInputEstado, BoxInputUf } from "../../components/BoxInput";
import { ContainerForm, ContainerForm2, ScrollForm } from "./style";
import axios from "axios";

export function Home() {
    //hooks - states
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');

    const isCepValid = (cep) => cep && typeof cep === 'string' && cep.length === 8;
    //hoks - effect
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (isCepValid(cep)) {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    
                    console.log("API Response:", response.data); 

                    if (response.data.erro) {
                        alert("CEP não encontrado");
                        clearAddressFields();
                        return;
                    }

                    setLogradouro(response.data.logradouro);
                    setBairro(response.data.bairro);
                    setCidade(response.data.localidade);
                    setEstado(response.data.uf);
                    setUf(response.data.uf);
                } else {
                    // Limpar os campos se o CEP não for válido
                    clearAddressFields();
                }
            } catch (error) {
                console.error("Erro ao buscar o CEP", error);
            }
        };

        fetchData();
    }, [cep]);

    const clearAddressFields = () => {
        setLogradouro('');
        setBairro('');
        setCidade('');
        setEstado('');
        setUf('');
    };

    return (
        //ScrollForm
        //ContainerForm
        // BoxInput - label e input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='Informe o CEP'
                    placeholder='Cep...'
                    KeyType="numeric"
                    maxLenght={8}
                    editable={true}
                    fieldValue={cep}
                    onchangeText={(tx) => {
                       setCep(tx);
                    }}
                />
                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    KeyType="text"
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    KeyType="text"
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                    KeyType="text"
                    fieldValue={cidade}
                />
                <ContainerForm2>
                <BoxInputEstado
                    textLabel='Estado'
                    placeholder='Estado...'
                    KeyType="text"
                    fieldWidth={70}
                    fieldValue={estado}
                />
                <BoxInputUf
                    textLabel='UF'
                    placeholder='UF...'
                    KeyType="text"
                    fieldWidth={20}
                    fieldValue={uf}
                />
                </ContainerForm2>
            </ContainerForm>
        </ScrollForm>
        
    )
}
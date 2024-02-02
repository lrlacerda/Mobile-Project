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

    //hoks - effect
        
        useEffect(async () => {
            // chamada da api
           
                try {
                    if (cep !="" && cep.length === 8) {
                      const endereco = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);

                      if (endereco.error) {
                        alert("Erro ao buscar o CEP")
                        return;
                      }
                      setLogradouro(endereco.data.logradouro)
                      setBairro(endereco.data.bairro)
                      setCidade(endereco.data.cidade)
                      setEstado(endereco.data.estado)
                      setUf(endereco.data.uf)
                      }
        
                } catch (error) {
                    console.log("Erro ao buscar o CEP ");
                }
        }, [cep]);

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
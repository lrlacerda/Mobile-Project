import styled from "styled-components";

//HeaderContainer - View
//HeaderContent - SafeAreaView
//TextHeader - Text

export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0px  0px 15px 15px;
    box-shadow: 0px 0px 10px black;
    elevation: 20;
`
export const HeaderContent = styled.SafeAreaView`
    margin-top: 45px;
`
export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_500Medium';
    color: #333E33;
    text-align: center;
`
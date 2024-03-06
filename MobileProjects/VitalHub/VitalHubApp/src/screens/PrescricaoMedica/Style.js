import styled from "styled-components"



export const ContainerButtonsPrescricao = styled.View`
flex-direction: row;

justify-content: space-between;
width: 90%;
align-items: center;
margin-top: 10px;
`
export const LinkCancelPrescricao = styled.Text`
font-size: 12px;
text-decoration: none;
font-family: 'MontserratAlternates_500Medium';
color: #C81D25;
`

export const ButtonEnviar = styled.TouchableOpacity`
height: 50px;
background-color: #49B3BA;
width: 50%;
border-radius: 5px;
justify-content: center;
flex-direction: row;
align-items: center;
gap: 10px;
`

export const BtnTextEnviar = styled.Text`
font-size: 14px;
color: white;
font-family: "MontserratAlternates_700Bold";
`
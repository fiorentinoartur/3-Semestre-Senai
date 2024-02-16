import styled from "styled-components";

export const Modal = styled.View`
width: 100%;
height: 100%;
position: fixed;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.45);
`

export const CardModal = styled.View`
width: 344px;
height: 310px;
background-color: white;
border-radius: 8px;
justify-content: center;
align-items: center;
`

export const BtnCancelarConsulta = styled.TouchableOpacity`
width: 80%;
height: 44px;
background-color: #496BBA;
border-radius: 5px;
margin-top: 30px;
justify-content: center;
`

export const ButtonTitle = styled.Text`
color: white;
font-size: 14px;
font-family: "MontserratAlternates_700Bold";
text-align: center;
text-transform: uppercase;
`



export const LinkCancelarConsulta = styled.Text`
color: #344F8F;
font-size: 14px;
font-family: 'MontserratAlternates_500Medium' ;
margin-top: 30px;
text-decoration: underline;
`
import styled from "styled-components";     

export const Button = styled.TouchableOpacity`
width: 90%;
height: 44px;
background-color: #496BBA;
border-radius: 5px;
margin-top: 30px;
justify-content: center;
`

export const ButtonGoogle = styled(Button)`
background-color: 1px solid #FAFAFA;
border: #496BBA;
margin-top: 15px;
align-items: center;
flex-direction: row;
gap: 30;
`

export const ButtonTitle = styled.Text`
color: white;
font-size: 14px;
font-family: "MontserratAlternates_700Bold";
text-align: center;
text-transform: uppercase;
`

export const ButtonTitleGoogle = styled(ButtonTitle)`
color: #496BBA;
`

export const ButtonsNumber = styled.TouchableOpacity`
width: 65px;
height: 62px;
border-radius: 5px;
border: 2px solid #77CACF;
justify-content: center;
align-items: center;
`
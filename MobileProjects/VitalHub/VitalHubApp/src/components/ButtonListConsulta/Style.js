import styled, { css } from "styled-components";

export const ButtonConsulta = styled.TouchableOpacity`
height: 35px;
width: 100px;

border-radius: 5px;
justify-content: center;
align-items: center;

${props => props.clickButton ? css`
background-color: #496BBA;` : css`
background-color: transparent;
border: 2px solid #607EC5;
`}
`

export const ButtonTextStyle = styled.Text`
font-size: 12px;
font-family: "MontserratAlternates_600SemiBold";

${props => props.clickButton ? css`
color: #FBFBFB;
` : css`
color: #607EC5 ;
`}
`
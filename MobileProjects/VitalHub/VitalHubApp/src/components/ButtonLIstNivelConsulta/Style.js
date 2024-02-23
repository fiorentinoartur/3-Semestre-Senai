import styled, { css } from "styled-components";

export const ButtonNivelConsulta = styled.TouchableOpacity`
border: 2px solid #34898F;
width: 30%;
height: 44px;
border-radius: 5px;
justify-content: center;
align-items: center;

${props => props.clickButton ? css`
background-color: #34898F;` : css`
background-color: transparent;
`}
`

export const TextNivelConsulta = styled.Text`
font-family: "MontserratAlternates_600SemiBold";
font-size: 14px;


${props => props.clickButton ? css`
color: white;
`: css`
color: #34898F;
`
}
`
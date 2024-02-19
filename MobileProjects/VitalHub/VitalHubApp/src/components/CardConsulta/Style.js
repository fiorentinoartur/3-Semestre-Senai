import styled, { css } from "styled-components";

export const CardContainer = styled.View`
width: 98%;
height: 102px;
box-shadow: 20px 20px 20px black;
elevation: 10;
background-color: white;
margin-bottom: 15px;
padding: 10px;
align-items: flex-end;
flex-direction: row;
justify-content: space-between;

`


export const ImagePaciente = styled.Image`
width: 77px;
height: 80px;
border-radius: 5px;
`

export const DataPaciente = styled.View`

height: 100%;
justify-content: space-between;
`

export const NamePaciente = styled.Text`
font-size: 16px;
color: #33303e;
font-family: "MontserratAlternates_600SemiBold";
`

export const TextHour = styled(NamePaciente)`

font-size: 14px;
${props => props.tipoCard != 'pendente' ? css`
color: #4E4B59;
` : css`

color: #49B3BA;

`}
`

export const ContainerData = styled.View`
flex-direction: row;
gap: 30;
align-items: center;
justify-content: center;
`
export const IdadePaciente = styled.Text`
font-size: 14px;
font-family: 'Quicksand_400Regular';
color: #8C8A97;
`

export const TipoConsulta = styled.Text`
font-size: 14px;
font-family: 'Quicksand_600SemiBold';
color: #8C8A97;
`
export const BotaoHora = styled.TouchableOpacity`
height: 26px;
width: 100px;
border-radius: 5px;

flex-direction: row;
align-items: center;
justify-content: center;
gap: 5;
${props => props.tipoCard != 'pendente' ? css`
background-color: #F1F0F5;
` : css`
background-color:  #E8FCFD;
`}
`
export const LinkCancel = styled.Text`
font-size: 12px;
text-decoration: none;
font-family: 'MontserratAlternates_500Medium';
${props => props.tipoCard == 'pendente' ? css`
color: #C81D25;
` : props.tipoCard == 'realizada' ? css`
color: #344F8F;
` : null}
`
import styled, { css } from "styled-components";

export const ContainerCard = styled.View`
height: 84px;
width: 100%;
margin-bottom: 12px;
box-shadow: 20px 20px 20px black;
elevation: 10;
background-color: white;
padding: 15px;
justify-content: space-between;

${props => props.clickButton ? css`
border: 2px solid #496BBA;
` : null}

`

export const Container1 = styled.View`

width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const ContainerAvalicao = styled.View`
flex-direction: row;
`
export const MediaAvaliacao = styled.Text`
color: #F9A620;
font-size: 14px;
font-family: 'Quicksand_600SemiBold';

`

export const TextFuncionamento = styled(MediaAvaliacao)`
color: #49B3BA;
`

export const LocalizacaoText = styled(MediaAvaliacao)`
color: #4E4B59;
    `
 export const ContainerFuncionamento = styled.View`
 height: 25px;
 width: 100px;
 background-color: #E8FCFD;
 border-radius: 5px;
 flex-direction: row;
 align-items: center;
 justify-content: space-evenly;
 `


import styled from "styled-components";

export const ContentIcon = styled.View`
border-radius: 18px;
padding: 9px 12px;
flex-direction: row;
background-color: ${props => `${props.tabBarActiveBackgroundColor}`};

justify-content: center;
align-items: center;
gap: 5px;
`


export const TextIcon = styled.Text`
font-size: 14px;
font-family: 'Quicksand_500Medium';
`
import styled from "styled-components";

export const LinkMedium = styled.Text`
font-size: 14px;
font-family: 'MontserratAlternates_500Medium' ;
color: #8c8a97;
margin-top: 10px;
align-self: flex-start;
margin-left: 20px;
text-decoration: underline;
`
export const LinkCancel = styled(LinkMedium)`
font-size: 12px;
color: #C81D25;
text-decoration: none;
`
export const LinkMediumAccount = styled(LinkMedium)`
color: #4D659D;
font-family: "MontserratAlternates_600SemiBold";
align-self: center;
margin-top: 30px;
`

export const LinkCancelarConsulta = styled(LinkMediumAccount)`
color: #344F8F;
font-size: 14px;
margin-right: 20;
`
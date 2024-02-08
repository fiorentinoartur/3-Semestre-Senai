import styled from "styled-components";

export const Input = styled.TextInput.attrs(
    {
        placeholderTextColor: '#34898F'
    }
)`
width: 90%;
height: 53px;
padding: 16px;
margin-top: 15px;
border: 2px solid #49B3BA;
border-radius: 5px;
color: #34898F;
font-size: 16px;
font-family: 'MontserratAlternates_600SemiBold';
`

export const InputPerfil = styled(Input).attrs(
    {
        placeholderTextColor: '#33303E'
    }
)`
background-color: #D4D4D4;
font-family: 'MontserratAlternates_500Medium';
font-size: 14px;
border: none;
color: #33303E;
`
export const InputCep = styled(InputPerfil)`
width: 150px;
`
export const InputCode = styled.TextInput.attrs(
{
    placeholderTextColor: "#34898F"
}
)`
width: 65px;
height: 62px;
border-radius: 5px;
border: 2px solid #77CACF;
justify-content: center;
align-items: center;
font-size: 40px;
font-family: "Quicksand_600SemiBold";
color: #34898F;
text-align: center;
`
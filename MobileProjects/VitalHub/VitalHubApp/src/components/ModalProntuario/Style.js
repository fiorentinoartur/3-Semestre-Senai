import styled from "styled-components";

export const CardModalProntuario = styled.View`
width: 90%;
height: 436px;
background-color: white;
border-radius: 8px;
padding: 25px;
align-items: center;

`

export const ImageProntuario = styled.Image`
width: 90%;
height: 181px;
border-radius: 10px;
`

export const NomePacienteProntuario = styled.Text`
font-family: "MontserratAlternates_600SemiBold";
font-size: 20px;
margin-top: 20px;
margin-bottom: 10px;
`
export const LabelPaciente = styled.Text`
font-family: "Quicksand_600SemiBold";
font-size: 16px;
color: #33303E;
width: 90%;
`

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
margin-bottom: 20px;
`

export const InputGray = styled(Input).attrs(
    {
        placeholderTextColor: '#4E4B59'
    }
)`
    border:  none;
    background-color: #F5F3F3;
    font-size: 14px;
    `
export const Textarea = styled(Input)`
height: 121px;


`

export const TextareaGray = styled(Textarea).attrs(
    {
        placeholderTextColor: '#4E4B59'
    }
)`
border:  none;
background-color: #F5F3F3;
font-size: 14px;
`
export const TextareaGray100px = styled(TextareaGray)`
height: 100px;
`
export const ViewFoto = styled.View`
height: 111px;
width: 90%;
background-color: #F5F3F3;
margin-top: 10px;
margin-bottom: 10px;
`

import styled from "styled-components";

export const ModalPaciente = styled.View`
width: 100%;
height: 100%;
position: relative;
background-color: rgba(0,0,0,0.45);
`

export const CotainerAgendarConsulta = styled.View`
background-color: white;
height: 83%;
width: 100%;
position: absolute;
bottom: 0;
border-radius: 10px 10px 0px 0px;
align-items: center;
justify-content: space-evenly; 
padding: 30px 0;
`

export const TitleAgendamento = styled.Text`
font-size: 20px;
margin-bottom: 5px;
color: #33303e;
font-family: "MontserratAlternates_600SemiBold";
margin-bottom: 30px ;
`
export const TitleAgendamentoClinica = styled(TitleAgendamento)`
margin-top: 72px;
margin-bottom: 35px;
`
export const LabelAgendamento = styled.Text`
font-family: "Quicksand_600SemiBold";
font-size: 14px;
width: 90%;
margin-bottom: 10px;
`
export const SelectClinic = styled.TouchableOpacity`
width: 90%;
border: 2px solid #60BFC5;
height: 53px;
border-radius: 5px;
padding: 0 16px ;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`

export const TextInput = styled.Text`
font-family: "MontserratAlternates_600SemiBold";
font-size: 14px;
color: #34898F;
`
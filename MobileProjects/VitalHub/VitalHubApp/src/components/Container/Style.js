import styled from "styled-components"

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;

`

export const ContainerFotoEmail = styled.View`
position: relative;
align-items: center;
width: 100%;
height: 330px;
`
export const ContainerEmail = styled.View`
justify-content: center;
align-items: center;
height: 100px;
width: 90%;
border-radius: 5px;
background-color: white;
position: absolute;
bottom: 0;
/* -webkit-box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.75); */
box-shadow: 20px 20px 20px black;
elevation: 20;

`

export const ContainerDoutorClaudio = styled.View`
width: 163px;
height: 60px;
flex-direction: row-reverse;
justify-content: center;
align-items: center;
gap: 15px;
margin: 22px 22px 0px 0px;
`


export const CardContainer = styled.View`
width: 90%;
height: 102px;
box-shadow: 20px 20px 20px black;
elevation: 10;
background-color: white;
margin-bottom: 20;
flex-direction: row;
align-items: center; 
padding: 0 15px;

`
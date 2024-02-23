import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";

export const Header = ({caminhoImage, nameUser}) => {
    return(
        <ContainerHeader>
           <BoxUser>
                <ImageUser
                source={{uri: caminhoImage}}
                />
                <DataUser>
                    <TextDefault>Bem Vindo</TextDefault>
                    <NameUser>{nameUser}</NameUser>
                </DataUser>
            </BoxUser> 
            {/* material icons */}
        </ContainerHeader>
    )
}


export default Header;
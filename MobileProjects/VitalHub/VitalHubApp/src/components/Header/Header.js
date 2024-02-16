import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";

export const Header = () => {
    return(
        <ContainerHeader>
           <BoxUser>
                <ImageUser
                source={{uri: "https://github.com/fiorentinoartur.png"}}
                />
                <DataUser>
                    <TextDefault>Bem Vindo</TextDefault>
                    <NameUser>Artur Fiorentino</NameUser>
                </DataUser>
            </BoxUser> 
            {/* material icons */}
        </ContainerHeader>
    )
}


export default Header;
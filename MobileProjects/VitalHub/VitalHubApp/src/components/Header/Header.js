import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { TouchableOpacity } from "react-native";

export const Header = ({caminhoImage, nameUser, navigation}) => {
    return(
        <ContainerHeader>
           <BoxUser onPress={() => navigation.navigate("PerfilCadastro")}>
            
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
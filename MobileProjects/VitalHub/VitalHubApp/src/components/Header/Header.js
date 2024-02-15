import styled from "styled-components";
import { LinearGradient } from 'expo-linear-gradient';
import { ContainerHeader } from "../Container/Style";
import { BoxUser, ImageUser } from "./Style";

export const Header = () => {
    return(
        <ContainerHeader>
           <BoxUser>
                <ImageUser
                source={{uri: "https://github.com/fiorentinoartur.png"}}
                />
                <DataUser>
                    <TextDefault></TextDefault>
             {/* 
                    <NameUser></NameUser>
                */}
                </DataUser>
            </BoxUser> 
            {/* material icons */}
        </ContainerHeader>
    )
}


export default Header;
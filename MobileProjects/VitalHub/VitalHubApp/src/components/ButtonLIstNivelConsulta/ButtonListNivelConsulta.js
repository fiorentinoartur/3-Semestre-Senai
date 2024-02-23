import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonNivelConsulta, TextNivelConsulta } from './Style';

const ButtonListNivelConsulta = ({textButton, clickButton = false, onPress}) => {
    return (
   <ButtonNivelConsulta clickButton={clickButton} onPress={onPress}>
        <TextNivelConsulta clickButton={clickButton}>{textButton}</TextNivelConsulta>
   </ButtonNivelConsulta>
    );
};

export default ButtonListNivelConsulta;
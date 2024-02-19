import React from 'react';
import { ButtonConsulta, ButtonTextStyle } from './Style';

const ButtonListConsulta = ({text, clickButton = false, onPress}) => {
    return (
    <ButtonConsulta clickButton={clickButton} onPress={onPress}>
        <ButtonTextStyle clickButton={clickButton}>{text}</ButtonTextStyle>
    </ButtonConsulta>
    );
};

export default ButtonListConsulta;
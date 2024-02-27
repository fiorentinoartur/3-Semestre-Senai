import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-BR'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Quar.', 'Qui.', 'Sex.', 'Sab.'],
    today: "Hoje"

};
LocaleConfig.defaultLocale = 'pt-BR'
const CalendarConsulta = () => {

    const [selected, setSelected] = useState(' ');
    return (
        <Calendar
        style={{height: 350, width: 350}}
            onDayPress={day => {
                setSelected(day.dateString)
            }}
            markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedColor: '#49B3BA' }
            }}
        />
    );
};

export default CalendarConsulta;
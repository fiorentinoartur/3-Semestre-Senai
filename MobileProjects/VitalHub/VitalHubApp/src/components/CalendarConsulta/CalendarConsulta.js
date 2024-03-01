
import React, { useEffect, useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

LocaleConfig.locales[moment.locale()] = {
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
LocaleConfig.defaultLocale = moment.locale();
const CalendarConsulta = () => {

    const [selected, setSelected] = useState(' ');
 useEffect(() =>{
    if (selected != null || selected != ' ') {
    
    const newDate = new Date(selected).toLocaleDateString('default',{day:'numeric' ,month:'long', year:'numeric'}) ;
      AsyncStorage.setItem("DataConsulta", newDate)
    }
    },[selected])

    return (
        <Calendar

        style={{height: 350, width: 350, marginBottom: 30}}
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
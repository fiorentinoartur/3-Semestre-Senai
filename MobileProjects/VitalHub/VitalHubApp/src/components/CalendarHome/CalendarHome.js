import moment from 'moment';
import React from 'react';
import { StyledCalendarStrip } from './Style';
import { StyleSheet } from 'react-native';

const CalendarHome = () => {
    moment.updateLocale("pt-br", {
        months:
        "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays:
        "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
            "_"
          ),

          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),

          weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
    });

    const currentDate = new Date();

    const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(),1);

    const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    
    return (
       <StyledCalendarStrip 
       calendarAnimation={{type: "sequence", duration: 30}}
       daySelectionAnimation={styles.selectedAnimationStyle}

          // seta esquerda e direita para avançar e voltar(aqui como display none)
       iconLeftStyle={styles.iconStyle}
       iconRightStyle={styles.iconStyle}

         // deixa uma marcação default - data atual
       selectedDate={currentDate}

         // dia que começamos a visualizar a barra
       startingDate={moment()}

        //data min e max - início do mês e final do mês
       minDate={startingDate}
       maxDate={endingDate}

      
          //estilização dos itens que não estão selecionados
       calendarHeaderStyle={styles.calendarHeaderStyle}
       dateNumberStyle={styles.numberDateStyle}
       dateNameStyle={styles.selectedDateNameStyle}

         // estilização do item que está selecionado - efeito do item marcado
       highlightDateNameStyle={styles.selectedDateNameStyle}
       highlightDateNumberStyle={styles.selectedDateNumberStyle}
       highlightDateContainerStyle={styles.selectedContainerStyle}

        //tamanho do container
       iconContainer={{flex: 0.1}}

          //scroll da barra
       scrollable={true}


       />
    );
};
const styles = StyleSheet.create({
    selectedAnimationStyle: {
        type: "border",
        duration: 200,
        borderWidth: 2,
        borderHighlightColor: "#49B3BA"
    }, 
    iconStyle: {
        display: 'none'
    },
    calendarHeaderStyle : {
        fontSize: 22,
        textAlign: "center",
        alignSelf : 'flex-start',
        color : '#4E4B59',
        fontFamily: "MontserratAlternates_600SemiBold",
        paddingHorizontal: 16
      },
      nameDateStyle : {
        color: "#ACABB7",
        fontSize: 12,
        textTransform : 'capitalize'
      },
      numberDateStyle : {
        color: "#5F5C6B",
        fontSize: 16
      },
      selectedDateNameStyle : {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textTransform : 'capitalize'
      },
      selectedDateNumberStyle : {
        color: "white",
        fontSize: 14
      },
      selectedContainerStyle : {
        backgroundColor: `#60BFC5`
      },
})
export default CalendarHome;
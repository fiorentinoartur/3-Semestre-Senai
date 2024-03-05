//Importar o recurso do bottom tabs

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomePaciente from '../HomePaciente/HomePaciente';
import PerfilCadastro from '../PerfilCadastro/PerfilCadastro';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
const  BottomTab = createBottomTabNavigator();

export const Main = () => {
    return(
        <BottomTab.Navigator
        //Definir a rota inicial
        initialRouteName='Home'

        screenOptions={({route}) => ({
            tabBarStyle: {backgroundColor: "#FFFFFF", height: 80, paddingTop: 10},
            tabBarActiveBackgroundColor: "transparent",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => {
            if(route.name === "Home"){
            return(
                <>
                
                </>
            )
            }else{

            }
            }
        })}
        >
    
            <BottomTab.Screen
            name="Home"
            component={HomePaciente}
            options={{title: "Login"}}
            />
            <BottomTab.Screen
            name="Profile"
            component={PerfilCadastro}
            />
        </BottomTab.Navigator>
    )
}
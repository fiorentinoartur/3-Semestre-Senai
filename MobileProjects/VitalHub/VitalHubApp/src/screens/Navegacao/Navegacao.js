import { Button, View } from "react-native";

export const Navegacao = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent:"space-evenly"}}>
            <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            />

            <Button
            title="HomePaciente"
            onPress={() => navigation.navigate("HomePaciente")}
            />

            <Button
            title="PrescricaoMedica"
            onPress={() => navigation.navigate("PrescricaoMedica")}
            />
        </View>
    );
}


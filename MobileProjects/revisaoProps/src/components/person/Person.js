import { Text, View,StyleSheet } from "react-native"

const Person = ({ name, age }) => {

    return (
        <>
            <View style={styles.container}>
                <Text style={{fontFamily: 'Poppins_700Bold_Italic'}}>Nome: {name}</Text>
                <Text style={{fontFamily: 'SingleDay_400Regular'}}>Idade: {age}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:10,
        borderColor:"black",
        borderWidth: 5,
        // fontFamily: 'Poppins_700Bold_Italic',
        width:200,
        height:40
    }                 

})
export default Person
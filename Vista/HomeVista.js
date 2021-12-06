import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Text} from "react-native-elements";

_GOOGLE_URL= "https://www.googleapis.com/oauth2/v3/userinfo?access_token=";

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <Text h1> Bienvenido!</Text>
        <Text style={styles.baseText} > Por favor ingrear al menu para validar el telefono. O presionar el bontón</Text>
        <Button onPress={()=>navigation.navigate('Validador')} title='VALIDAR' />
          
      </View>
   );
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      marginTop: 50,
      borderWidth: 1,
      padding: 10,
    },
    baseText: {
      marginLeft: 50,
      marginRight: 50,
      padding: 20,
      color: 'black',
      fontWeight: 'bold',
      
    },
   
  });
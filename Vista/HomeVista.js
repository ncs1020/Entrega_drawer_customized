import * as React from 'react';
import { View, Button } from 'react-native';
import { Text} from "react-native-elements";

_GOOGLE_URL= "https://www.googleapis.com/oauth2/v3/userinfo?access_token=";

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <Text h1> Bienvenido!</Text>
        <Text > Aca va la bienvenida y el boton para logueo</Text>
        <Button onPress={()=>navigation.navigate('Info')} title='Login' />
          
      </View>
   );
  }

  export default HomeScreen;
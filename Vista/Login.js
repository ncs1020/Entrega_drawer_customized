import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Button, Image, StyleSheet } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '988313077947-krbv222rnv076hdijep9f86ihj1jhae1.apps.googleusercontent.com'
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
        console.log(response);
        navigation.navigate('Inicio', {auth: response.authentication})
      }
  }, [response]);

  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <Image  style={styles.imagen}
          source = {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/120px-Yes_Check_Circle.svg.png' }}
        />
        <Button 
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync();
            }}> Login </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  imagen: {
    marginTop: 100,
   width: 200,
   height: 200,
   marginBottom:50
   
 }
});
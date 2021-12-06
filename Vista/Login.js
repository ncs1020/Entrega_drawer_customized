import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Button } from 'react-native';

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

  return (
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync();
            }}> Login </Button>
    </View>
  );
}
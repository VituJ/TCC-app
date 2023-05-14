import { Text, View, ImageBackground, Image, TextInput, Button} from 'react-native';
import styles from './style';

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground style= {styles.image_background} source={require('../../assets/fundo_tela_login_cadastro1.png')}>
        <View>
            <Image
              source={require('../../assets/logotcc.jpg')}
              style={styles.logo}
            />
        </View>
        <View>
            <Image
              source={require('../../assets/userprofile.png')}
              style={styles.userprofile}
            />
        </View>
        <View style={styles.container_login}>
            <Text>Login</Text>
            <TextInput 
            placeholder="Digite seu email"
            keyboardType="email-address">
            </TextInput>

            <Text>Senha</Text>
            <TextInput
            placeholder="Digite sua senha"
            keyboardType="numeric">
            </TextInput>

            <Button 
            title= 'Login'
            onPress={() => validation()}>
            </Button>   
        </View>
      </ImageBackground>
    </View>
  );
}

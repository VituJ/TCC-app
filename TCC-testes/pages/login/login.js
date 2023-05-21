import { Text, View, ImageBackground, Image, TextInput, Button } from 'react-native';
import styles from './style';

export default function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image_background} source={require('../../assets/fundo_tela_login_cadastro1.png')}>
        <View style={styles.home}>
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
              keyboardType="default"
              secureTextEntry>
            </TextInput>

            <Button
              title='Login'
              onPress={() => validation()}>
            </Button>

            <Text>Não tem uma conta? Cadastre-se aqui</Text>
            <Text>Você é uma empresa? Cadastre-se</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

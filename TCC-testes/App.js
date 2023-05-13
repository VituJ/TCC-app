import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const PlaceholderImage = require('./assets/background-image.png');
;


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style= {styles.image_background} source={require('./assets/fundo_tela_login_cadastro1.png')}>
        <Image
          source={require('./assets/background-image.png')}
          style={styles.logo}
        />
        <Text> oi </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  logo: {
    width: 150,
    resizeMode: 'contain',
    bottom: '30%',
  },  

  image_background: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

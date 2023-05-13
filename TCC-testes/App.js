import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlaceholderImage = require('./assets/background-image.png');

import Button from './componentes/button';
import ImageViewer from './componentes/imageViewer';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageConteiner}>
        <ImageViewer placeholderImageSource={PlaceholderImage}></ImageViewer>
      </View>
      <Text style={styles.texto}>Omg, it's Madeline from Celeste</Text>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageConteiner:{
    flex: 1,
    paddingTop: 58, 
  },

  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  texto:{
    color: '#fff',
    paddingBottom: 200,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

});


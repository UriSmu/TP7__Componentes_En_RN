import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  const fondo = require('./assets/image-background.png');
  const fotoPerfil = require('./assets/foto-perfil.png');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="black" />
      
      <ImageBackground source={fondo} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.container1}>
          <Image source={fotoPerfil} style={styles.profileImage} />
          <Text style={styles.titleText}>Uriel Matías Smucler</Text>
          <Text style={styles.subtitleText}>Estudiante de Informática en ORT</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.8,
  },
  profileImage: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
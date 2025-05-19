import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Pressable, Alert} from 'react-native';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const fondo = require('./assets/image-background.png');
  const fotoPerfil = require('./assets/foto-perfil.png');
  const fondoAlternativo1 = require('./assets/fondo-alternativo1.png');
  const fondoAlternativo2 = require('./assets/fondo-alternativo2.png');
  const fondoAlternativo3 = require('./assets/fondo-alternativo3.png');

  const [mensaje, handleMensajeChange] = useState('');
  const [fondoActual, setFondoActual] = useState(fondo);
  const [opacidad, setOpacidad] = useState(1);

  const handleEnviar = () => {
    Alert.alert("Mensaje enviado", mensaje);
    handleMensajeChange('');
  };

  const cambiarFondo = () => {
    const fondos = [fondo, fondoAlternativo1, fondoAlternativo2, fondoAlternativo3];
    const nuevoFondo = fondos[Math.floor(Math.random() * fondos.length)];    //FUNCIÓN BÁSICA EXTRAÍDA DE LA WEB
    setFondoActual(nuevoFondo);
  };

  const mostrarInfoPerfil = () => {
    setTimeout(() => {
      Alert.alert("Información del perfil", "Uriel Matías Smucler, 17 años, Programador, Estudiante de Informática en ORT.");
    }, 500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" backgroundColor="#eeda9d" />
      
      <ImageBackground source={fondoActual} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.container1}>
          <Pressable
            onPress={cambiarFondo}
            onPressIn={() => setOpacidad(0.5)}
            onPressOut={() => setOpacidad(1)}
            onLongPress={mostrarInfoPerfil} 
          >
            <Image source={fotoPerfil} style={[styles.profileImage, { opacity: opacidad }]} />
          </Pressable>
          <Text style={styles.titleText}>Uriel Matías Smucler</Text>
          <Text style={styles.subtitleText}>Estudiante de Informática en ORT</Text>
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder="Ingrese un mensaje"
            onChangeText={handleMensajeChange}
            value={mensaje}
          />
          <TouchableOpacity style={styles.button} onPress={handleEnviar}>
            <Text style={styles.buttonText}>Enviar Mensaje</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  container2: {
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
    fontFamily: 'Arial',
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Courier New',
  },
  input: {
    width: '80%',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#0164a5',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const fondo = require('./assets/image-background.png');
  const fotoPerfil = require('./assets/foto-perfil.png');
  const[mensaje, handleMensajeChange] = useState('')
  const handleEnviar = () => {
    alert = (mensaje) => {}

  }
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar color="#0164a5" backgroundColor="#eeda9d" />
      
      <ImageBackground source={fondo} resizeMode="cover" style={styles.backgroundImage}>
        <View style={styles.container1}>
          <Image source={fotoPerfil} style={styles.profileImage} />
          <Text style={styles.titleText}>Uriel Matías Smucler</Text>
          <Text style={styles.subtitleText}>Estudiante de Informática en ORT</Text>
        </View>
        <View style={styles.container2}>
          <TextInput style={styles.input} placeholder='Ingrese un mensaje' onChangeText={handleMensajeChange} value={mensaje} ></TextInput>
          <TouchableOpacity onPress={handleEnviar}>
            <Text>Enviar Mensaje</Text>
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

//COSAS POR CORREGIR:
//1: Que title y subtitle tengan diferente font family
//2: STATUS BAR CON FONDO #eeda9d y letra #0164a5 --> el color de la letra no funciona
//3: La foto de perfil está levemente encimada con el status bar
//4: Que "container2" sea un estilo diferente a 1
//5: Hacer que el Alert de HandleEnviar funcione
//6: Convertir la foto en un pressable que:
  //A: Al presionar 1 vez cambie el fondo (entre 3 opciones de imágen)
  //B: on500ms press --> muestra más info del perfil
  //C: Se opaque la imágen mientras se aprieta
//7: Ponerle color, fondo, y estilo al input y enviar
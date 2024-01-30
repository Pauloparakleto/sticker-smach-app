import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViwer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/images/background-image.png')
const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    console.log(result);
  } else {
    alert('You did not select any image.');
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.footerContainer}>
        <Button theme={'primary'} label={'Choose a photo'} onPress={pickImageAsync} />
        <Button label={'Use this photo'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efcef0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

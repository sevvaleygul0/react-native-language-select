import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const _container = (width: number, height: number) => ({
  width: width,
  height: height,
});

export default StyleSheet.create({});

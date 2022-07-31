import {StyleSheet, Dimensions, ViewStyle} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const _itemContainer = (
  backgroundColor: string,
  width: number,
  height: number,
): ViewStyle => ({
  backgroundColor: backgroundColor,
  borderRadius: 20,
  justifyContent: 'center',
  height: height,
  width: width,
  marginBottom: 12,
});

export default StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
  },
});

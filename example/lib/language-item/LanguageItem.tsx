import React, {useState} from 'react';
import {Dimensions, Image, Text, View, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import styles, {_itemContainer} from './LanguageItem.style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ILanguageItem {
  itemContainer?: ViewStyle;
  title: string;
  icon: any;
  width?: number;
  height?: number;
}

const LanguageItem: React.FC<ILanguageItem> = ({
  itemContainer,
  title,
  icon,
  width = windowWidth * 0.9,
  height = 90,
}) => {
  const [state, setState] = useState<any>();
  const isActive = false;
  const backgroundColor = isActive ? '#504ED9' : '#FFFFFF';

  return (
    <View
      style={[_itemContainer(backgroundColor, width, height), itemContainer]}>
      <Text>{title}</Text>
      <Image source={icon} style={styles.imageStyle} />
    </View>
  );
};

export default LanguageItem;

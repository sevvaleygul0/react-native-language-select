import RNBounceable from '@freakycoder/react-native-bounceable';
import React, {useState} from 'react';
import {Dimensions, Image, Text, View, ViewStyle} from 'react-native';
import {ILanguagePicker} from '../LanguagePicker';
/**
 * ? Local Imports
 */
import styles, {_itemContainer, _titleStyle} from './LanguageItem.style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ILanguageItem {
  itemContainer?: ViewStyle;
  item: ILanguagePicker;
  width?: number;
  height?: number;
  handleOnSelectItem?: (selectedItem: ILanguagePicker) => void;
}

const LanguageItem: React.FC<ILanguageItem> = ({
  itemContainer,
  item,
  width = windowWidth * 0.9,
  height = 80,
  handleOnSelectItem,
}) => {
  const [state, setState] = useState<any>();
  const isActive = false;
  const backgroundColor = isActive ? '#504ED9' : '#FFFFFF';
  const textColor = isActive ? '#FFFFFF' : '#2F3452';

  return (
    <RNBounceable
      style={[_itemContainer(backgroundColor, width, height), itemContainer]}
      onPress={() => handleOnSelectItem && handleOnSelectItem(item)}>
      <Image source={item.imageSource} style={styles.imageStyle} />
      <Text style={_titleStyle(textColor)}>{item.title}</Text>
    </RNBounceable>
  );
};

export default LanguageItem;

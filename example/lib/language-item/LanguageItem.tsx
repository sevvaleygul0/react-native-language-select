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
  isActive: boolean;
  backgroundColor?: string;
  textColor?: string;
  onSelect?: (selectedItem: ILanguagePicker) => void;
}

const LanguageItem: React.FC<ILanguageItem> = ({
  itemContainer,
  item,
  width = windowWidth * 0.9,
  height = 80,
  isActive,
  backgroundColor = '#FFFFFF',
  textColor = '#2F3452',
  onSelect,
}) => {
  const borderColor = isActive ? '#504ED9' : '#FFFFFF';

  return (
    <RNBounceable
      style={[
        _itemContainer(backgroundColor, borderColor, width, height),
        itemContainer,
      ]}
      onPress={() => onSelect && onSelect(item)}>
      <Image source={item.imageSource} style={styles.imageStyle} />
      <Text style={_titleStyle(textColor)}>{item.title}</Text>
    </RNBounceable>
  );
};

export default LanguageItem;

import RNBounceable from '@freakycoder/react-native-bounceable';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {ILanguagePicker} from '../LanguagePicker';
/**
 * ? Local Imports
 */
import styles, {_itemContainer, _titleStyle} from './LanguageItem.style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ILanguageItem {
  item: ILanguagePicker;
  width?: number;
  height?: number;
  isActive: boolean;
  backgroundColor?: string;
  textColor?: string;
  itemContainer?: ViewStyle;
  imageComponent?: React.ReactNode | React.ReactNode[];
  checkComponent?: React.ReactNode | React.ReactNode[];
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
  imageComponent,
  checkComponent,
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
      {imageComponent || (
        <Image source={item.imageSource} style={styles.imageStyle} />
      )}
      <Text style={_titleStyle(textColor)}>{item.title}</Text>
      {isActive &&
        (checkComponent || (
          <Image
            source={require('../assets/check.png')}
            style={styles.checkImageStyle}
          />
        ))}
    </RNBounceable>
  );
};

export default LanguageItem;

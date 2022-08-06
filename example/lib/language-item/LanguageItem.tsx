import RNBounceable from '@freakycoder/react-native-bounceable';
import React from 'react';
import {Dimensions, Image, Text, ViewStyle} from 'react-native';
import {ILanguagePicker} from '../LanguagePicker';
/**
 * ? Local Imports
 */
import styles, {_itemContainer, _titleStyle} from './LanguageItem.style';

const windowWidth = Dimensions.get('window').width;
interface ILanguageItem {
  item: ILanguagePicker;
  width?: number;
  height?: number;
  isActive: boolean;
  backgroundColor?: string;
  activeBorderColor?: string;
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
  activeBorderColor = '#504ED9',
  onSelect,
  ...rest
}) => {
  const borderColor = isActive ? activeBorderColor : backgroundColor;
  return (
    <RNBounceable
      {...rest}
      style={[
        _itemContainer(backgroundColor, borderColor, width, height),
        itemContainer,
      ]}
      onPress={() => onSelect && onSelect(item)}
    >
      {imageComponent || (
        <Image {...rest} source={item.imageSource} style={styles.imageStyle} />
      )}
      <Text {...rest} style={_titleStyle(textColor)}>
        {item.title}
      </Text>
      {isActive &&
        (checkComponent || (
          <Image
            {...rest}
            source={require('../local-assets/check.png')}
            style={styles.checkImageStyle}
          />
        ))}
    </RNBounceable>
  );
};

export default LanguageItem;

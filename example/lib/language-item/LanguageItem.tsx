import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  ViewStyle,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
/**
 * ? Local Imports
 */
import {ILanguagePicker} from '../LanguagePicker';
import styles, {_itemContainer, _titleStyle} from './LanguageItem.style';

const windowWidth = Dimensions.get('window').width;

interface ILanguageItemRequiredProps extends ILanguageItemProps {
  item: ILanguagePicker;
  isActive: boolean;
}

export interface ILanguageItemProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  activeBorderColor?: string;
  textColor?: string;
  itemContainer?: ViewStyle;
  imageComponent?: React.ReactNode | React.ReactNode[];
  checkComponent?: React.ReactNode | React.ReactNode[];
  rightImageSource?: ImageSourcePropType;
  onSelect?: (selectedItem: ILanguagePicker) => void;
}

const LanguageItem: React.FC<ILanguageItemRequiredProps> = ({
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
  rightImageSource,
  onSelect,
}) => {
  const borderColor = isActive ? activeBorderColor : backgroundColor;
  return (
    <RNBounceable
      style={[
        _itemContainer(backgroundColor, borderColor, width, height),
        itemContainer,
      ]}
      onPress={() => onSelect && onSelect(item)}
    >
      {imageComponent || (
        <Image source={item.imageSource} style={styles.imageStyle} />
      )}
      <Text style={_titleStyle(textColor)}>{item.title}</Text>
      {isActive &&
        (checkComponent || (
          <Image
            source={rightImageSource || require('../local-assets/check.png')}
            style={styles.checkImageStyle}
          />
        ))}
    </RNBounceable>
  );
};

export default LanguageItem;

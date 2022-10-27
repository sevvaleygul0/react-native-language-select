import React, {useState} from 'react';
import {Dimensions, FlatList, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import {_container} from './LanguagePicker.style';
import LanguageItem, {ILanguageItemProps} from './language-item/LanguageItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface ILanguagePicker {
  title: string;
  imageSource: any;
  language?: string;
}

export interface ILanguagePickerProps {
  data: ILanguagePicker[];
  flatListStyle?: ViewStyle;
  containerWidth?: number;
  containerHeight?: number;
  initialIndex?: number;
  languageItemProps?: ILanguageItemProps;
  onSelect?: (selectedItem: ILanguagePicker) => void;
}

const LanguagePicker: React.FC<ILanguagePickerProps> = ({
  data,
  flatListStyle,
  initialIndex = -1,
  containerWidth = windowWidth * 0.9,
  containerHeight = windowHeight * 0.7,
  onSelect,
  languageItemProps,
  ...rest
}) => {
  const [selectedItem, setSelectedItem] = useState<ILanguagePicker | undefined>(
    data[initialIndex],
  );

  const handleOnSelectItem = (item: ILanguagePicker) => {
    setSelectedItem(item);
    onSelect && onSelect(item);
  };

  const renderItem = (item: ILanguagePicker) => (
    <LanguageItem
      {...languageItemProps}
      onSelect={handleOnSelectItem}
      isActive={selectedItem === item}
      item={item}
    />
  );

  return (
    <FlatList
      {...rest}
      data={data}
      style={[_container(containerWidth, containerHeight), flatListStyle]}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={item => item.title}
    />
  );
};

export default LanguagePicker;

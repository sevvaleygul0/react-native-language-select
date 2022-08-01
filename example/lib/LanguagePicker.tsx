import RNBounceable from '@freakycoder/react-native-bounceable';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
  ViewStyle,
} from 'react-native';
import LanguageItem from './language-item/LanguageItem';
/**
 * ? Local Imports
 */
import styles, {_container} from './LanguagePicker.style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface ILanguagePicker {
  title: string;
  imageSource: any;
  initialIndex?: number;
}

interface ILanguagePickerProps {
  data: ILanguagePicker[];
  container?: ViewStyle;
  containerWidth?: number;
  containerHeight?: number;
  initialIndex?: number;
  onSelect: (selectedItem: ILanguagePicker) => void;
}

const LanguagePicker: React.FC<ILanguagePickerProps> = ({
  data,
  container,
  initialIndex = -1,
  containerWidth = windowWidth * 0.9,
  containerHeight = windowHeight * 0.7,
  onSelect,
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
      onSelect={handleOnSelectItem}
      isActive={selectedItem === item}
      item={item}
    />
  );

  return (
    <FlatList
      data={data}
      style={[_container(containerWidth, containerHeight), container]}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={item => item.title}
    />
  );
};

export default LanguagePicker;

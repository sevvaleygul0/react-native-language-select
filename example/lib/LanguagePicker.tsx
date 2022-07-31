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

interface ILanguagePickerProps {
  data: any;
  container?: ViewStyle;
  containerWidth?: number;
  containerHeight?: number;
}

const LanguagePicker: React.FC<ILanguagePickerProps> = ({
  data,
  container,
  containerWidth = windowWidth * 0.9,
  containerHeight = windowHeight * 0.7,
}) => {
  const [state, setState] = useState<any>();

  const renderItem = (item: any) => (
    <LanguageItem title={item.title} icon={item.icon} />
  );

  return (
    <FlatList
      data={data}
      style={[_container(containerWidth, containerHeight), container]}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
};

export default LanguagePicker;

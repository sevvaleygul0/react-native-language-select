import React from 'react';
import {Text, View} from 'react-native';
import LanguageItem from './lib/language-item/LanguageItem';
import LanguagePicker, {ILanguagePicker} from './lib/LanguagePicker';

const data = [
  {
    title: 'English',
    imageSource: require('./lib/assets/america.png'),
  },
  {
    title: 'Turkish',
    imageSource: require('./lib/assets/turkey.png'),
  },
  {
    title: 'Italian',
    imageSource: require('./lib/assets/italy.png'),
  },
  {
    title: 'German',
    imageSource: require('./lib/assets/germany.png'),
  },
  {
    title: 'Swedish',
    imageSource: require('./lib/assets/sweden.png'),
  },
  {
    title: 'Japanese',
    imageSource: require('./lib/assets/japan.png'),
  },
];

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200,
        backgroundColor: '#F3F3F3',
      }}>
      <LanguagePicker
        data={data}
        onSelect={(selectedItem: ILanguagePicker) => {
          console.log(selectedItem);
        }}
      />
    </View>
  );
};

export default App;

import React from 'react';
import {View} from 'react-native';
import LanguagePicker, {ILanguagePicker} from './lib/LanguagePicker';

const data: ILanguagePicker[] = [
  {
    title: 'English',
    imageSource: require('./lib/local-assets/america.png'),
    language: 'en',
  },
  {
    title: 'Italian',
    imageSource: require('./lib/local-assets/italy.png'),
  },
  {
    title: 'German',
    imageSource: require('./lib/local-assets/germany.png'),
  },
  {
    title: 'Turkish',
    imageSource: require('./lib/local-assets/turkey.png'),
    language: 'tr',
  },
  {
    title: 'Swedish',
    imageSource: require('./lib/local-assets/sweden.png'),
  },
  {
    title: 'Japanese',
    imageSource: require('./lib/local-assets/japan.png'),
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
      }}
    >
      <LanguagePicker
        initialIndex={1}
        data={data}
        onSelect={(selectedItem: ILanguagePicker) => {
          console.log(selectedItem);
        }}
      />
    </View>
  );
};

export default App;

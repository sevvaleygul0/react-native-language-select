import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import LanguagePicker, {ILanguagePicker} from './lib/LanguagePicker';

const windowWidth = Dimensions.get('window').width;

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
        paddingTop: 50,
        backgroundColor: '#EFEFEF',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 26,
          color: '#454A62',
          marginTop: 32,
          marginBottom: 30,
        }}
      >
        Language
      </Text>
      <Text
        style={{
          width: windowWidth * 0.7,
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 13,
          color: '#2F3452',
          marginBottom: 40,
        }}
      >
        You can choose the language and costumise your application in the
        language you want
      </Text>
      <LanguagePicker
        initialIndex={1}
        languageItemProps={{
          activeBorderColor: 'red',
        }}
        data={data}
        onSelect={(selectedItem: ILanguagePicker) => {
          console.log(selectedItem);
        }}
      />
    </View>
  );
};

export default App;

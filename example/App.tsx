import React from 'react';
import {Text, View} from 'react-native';
import LanguageItem from './lib/language-item/LanguageItem';
import LanguagePicker from './lib/LanguagePicker';

const data = [
  {title: 'English', icon: require('./lib/assets/america.png')},
  {title: 'Turkey', icon: require('./lib/assets/turkey.png')},
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
      <LanguagePicker data={data} />
    </View>
  );
};

export default App;

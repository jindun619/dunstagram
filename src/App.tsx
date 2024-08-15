import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation/RootNav';
import {ThemeProvider} from 'styled-components';
import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {dark, light, Theme} from './utils/theme';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const App = () => {
  const [appTheme, setAppTheme] = useState('light');

  useEffect(() => {
    Appearance.addChangeListener(() => {
      setAppTheme(Appearance.getColorScheme() === 'dark' ? 'dark' : 'light');
      return () => {};
    });
  }, []);

  const styledTheme: Theme = appTheme === 'light' ? light : dark;
  const navigationTheme = appTheme === 'light' ? DefaultTheme : DarkTheme;

  return (
    <ThemeProvider theme={styledTheme}>
      <NavigationContainer theme={navigationTheme}>
        <RootNav />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

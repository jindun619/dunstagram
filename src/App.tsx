import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation/RootNav';
import {ThemeProvider} from 'styled-components';
import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {dark, light, Theme} from './utils/theme';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={styledTheme}>
        <NavigationContainer theme={navigationTheme}>
          <RootNav />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

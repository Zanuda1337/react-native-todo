import ToDoList from './feautures/ToDoList/ToDoList';
import styled from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { globalTheme } from './assets/styles/globalTheme';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <Container onLayout={onLayout}>
        <ToDoList />
      </Container>
    </Provider>
  );
}
const Container = styled.SafeAreaView`
  margin-top: ${StatusBar.currentHeight}px;
  flex: 1;
  background-color: ${globalTheme.colors['main-background']};
`;

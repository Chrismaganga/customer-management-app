import store from '../Store/index';
import { Stack } from "expo-router";
import React from 'react'
import { Provider } from "react-redux";
const RootLayout = () => {
  return (
    <Stack>
      <Provider store={store}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: true,
        }}
      />
      </Provider>
    </Stack>
  );
};

export default RootLayout;
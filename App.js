import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './app/components/Main'

// View -> UIView

export default function App() {
  let x = 1;
  console.log("App executed")

  return (
    <Main />
  );
}

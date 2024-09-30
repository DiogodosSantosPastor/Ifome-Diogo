import React from 'react';
import { CarrinhoProvider } from '../../scripts/CarrinhoContext'; 
import { Slot } from 'expo-router'

export default Layout = () => {
  return (
    <CarrinhoProvider>
      <Slot />
    </CarrinhoProvider>
  );
}
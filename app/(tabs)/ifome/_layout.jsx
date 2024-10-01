import React from 'react';
import { LancheProvider } from './LancheContext';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './Inicial';
import Carrinho from './Carrinho';

const Stack = createStackNavigator();

const Layout = () => {
    return (
        <LancheProvider>
                <Stack.Navigator initialRouteName="Inicial">
                    <Stack.Screen name="Inicial" component={Inicial} />
                    <Stack.Screen name="Carrinho" component={Carrinho} />
                </Stack.Navigator>
        </LancheProvider>
    );
};

export default Layout;

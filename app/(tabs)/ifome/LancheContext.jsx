
import React, { createContext, useContext, useState } from 'react';

const LancheContext = createContext();

export const LancheProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <LancheContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </LancheContext.Provider>
    );
};

export const useLancheContext = () => {
    return useContext(LancheContext);
};

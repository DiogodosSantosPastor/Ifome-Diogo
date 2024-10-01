import React from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useLancheContext } from './LancheContext';

const Carrinho = () => {
    const { cart, clearCart } = useLancheContext();

    const handlePurchase = () => {
        if (cart.length === 0) {
            Alert.alert("Carrinho vazio", "Adicione itens ao carrinho antes de comprar.");
        } else {
            Alert.alert("Compra realizada!", "Obrigado pela sua compra.");
            clearCart(); 
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Carrinho de Compras</Text>
            {cart.length === 0 ? (
                <Text style={styles.emptyCart}>O carrinho está vazio</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.item}>
                                {item.name} - R$ {item.price}
                            </Text>
                        </View>
                    )}
                    
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            )}
            <View style={styles.buttonContainer}>
                <Button title="Limpar Carrinho" onPress={clearCart} />
                <Button title="Comprar" onPress={handlePurchase} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212', 
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#ffffff', 
    },
    emptyCart: {
        fontSize: 18,
        color: '#bbbbbb', 
        textAlign: 'center',
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#444444', 
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 15,
    },
    item: {
        fontSize: 18,
        color: '#ffffff', // Texto claro
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        color: '#ffffff', // Texto claro no botão
        fontWeight: 'bold',
        flex: 1,
        marginHorizontal: 5,
    },
});


export default Carrinho;

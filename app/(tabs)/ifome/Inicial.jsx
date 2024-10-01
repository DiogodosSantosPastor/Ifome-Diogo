import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import { useLancheContext } from './LancheContext';

const snacks = [
    { id: '1', name: 'Hambúrguer', price: 10.50, image: 'https://cdn.abrahao.com.br/base/3d9/dab/e52/propaganda-de-hamburguer.jpg' },
    { id: '2', name: 'Pizza', price: 15.00, image: 'https://s2-oglobo.glbimg.com/qeY272LDeEyeSg8NTIcU4cEtBV0=/0x452:3584x4447/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/Z/H/zmMWBBTuucjAYMr4vS7w/close-up-em-uma-deliciosa-pizza.jpg' },
    { id: '3', name: 'Batata Frita', price: 5.69, image: 'https://www.delicioso.com.br/wp-content/uploads/migration/batata-frita-0522.jpg' },
];

const Inicial = ({ navigation }) => {
    const { addToCart } = useLancheContext();

    const handleAddToCart = (snack) => {
        addToCart(snack);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione seu Lanche</Text>
            <FlatList
                data={snacks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemText}>
                                {item.name} - R$ {item.price}
                            </Text>
                            <Button
                                title="Adicionar ao Carrinho"
                                onPress={() => handleAddToCart(item)}
                            />
                        </View>
                    </View>
                )}
            />
            <Button
                title="Ir para o Carrinho"
                onPress={() => navigation.navigate('Carrinho')}
            />
        </View>
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
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#444444', 
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8, 
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff', 
    },
    itemPrice: {
        fontSize: 16,
        color: '#bbbbbb', 
        marginVertical: 5,
    },
    buttonContainer: {
        marginTop: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        color: '#ffffff', 
        fontWeight: 'bold',
    },
});



export default Inicial;

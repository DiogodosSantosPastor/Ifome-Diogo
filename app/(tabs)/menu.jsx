import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useLancheContext } from './LancheContext';

const snacks = [
    { id: '1', name: 'Hambúrguer', price: 10 },
    { id: '2', name: 'Pizza', price: 15 },
    { id: '3', name: 'Batata Frita', price: 5 },
];

const Inicial = ({ navigation }) => {
    const { addToCart } = useLancheContext();

    const handleAddToCart = (snack) => {
        addToCart(snack);
    };

    return (
        <View>
            <Text>Selecione seu Lanche</Text>
            <FlatList
                data={snacks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name} - R$ {item.price}</Text>
                        <Button title="Adicionar ao Carrinho" onPress={() => handleAddToCart(item)} />
                    </View>
                )}
            />
            <Button title="Ir para o Carrinho" onPress={() => navigation.navigate('Carrinho')} />
        </View>
    );
};

export default Inicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  cartButton: {
    marginTop: 20,
  },
});

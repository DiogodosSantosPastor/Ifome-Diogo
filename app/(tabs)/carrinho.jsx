import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CarrinhoContext } from '../../scripts/CarrinhoContext'; 

const Carrinho = () => {
  const { carrinhoItems, clearCarrinho } = useContext(CarrinhoContext); 

  const totalItems = carrinhoItems.length;
  const totalPrice = carrinhoItems.reduce((sum, item) => sum + item.price, 0);

  const CarrinhoItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text>{item.itemText}</Text>
      <Text style={styles.itemPrice}>Preço: R$ {item.price.toFixed(2)}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Itens no Carrinho</Text>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total de Itens: <Text style={styles.summaryValue}>{totalItems}</Text></Text>
        <Text style={styles.summaryText}>Total: <Text style={styles.summaryValue}>R$ {totalPrice.toFixed(2)}</Text></Text>
      </View>

      {totalItems === 0 ? (
        <Text style={styles.emptyCart}>O carrinho está vazio</Text>
      ) : (
        <FlatList
          data={carrinhoItems}
          renderItem={CarrinhoItem}
          keyExtractor={item => item.id}
        />
      )}

      <Button title="Limpar Carrinho" onPress={clearCarrinho} />
    </View>
  );
}
export default Carrinho

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
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyCart: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
  itemCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#777',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
  },
});

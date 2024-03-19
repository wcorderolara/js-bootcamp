import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import ProductItem from './components/ProductItem';
import ProductInput from './components/ProductInput';

export default function App() {
  const [producto, setProducto] = useState('');
  const [listaProductos, setListaProductos] = useState([]);

  function productHandlerInput(productEntered) {
    setProducto(productEntered);
  }

  function addProductHandler() {
    setListaProductos( (currentListaProductos) => [...currentListaProductos, 
      {text: producto, key: Math.random().toString()}]);
  }


  return (
    <View style={styles.appContainer}>
      
      <ProductInput
        onTextChange={productHandlerInput}
        onAddProduct={addProductHandler}
        producto={producto}/>

      <View style={styles.productsContainer}>
        <FlatList
          data={listaProductos}
          renderItem= { (itemData) => {
            return (
              <ProductItem itemData={itemData}/>
            )
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 16
  },
  
  productsContainer: {
    flex: 6
  },
});

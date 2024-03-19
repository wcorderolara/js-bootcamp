import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProductItem = ({itemData}) => {
  return (
    <View style={styles.item}>
        <Text style={styles.textItem}>{itemData.item.text}</Text>
    </View>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
    item: {
      padding: 8,
      margin: 8,
      backgroundColor: '#49c5f8',
      
      borderRadius: 8
    },
    textItem: {
      color: '#ffffff',
      fontSize: 18
    }
  });


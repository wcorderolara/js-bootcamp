import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

const ProductInput = ({ onTextChange, onAddProduct, producto }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoFocus={true}
        placeholder="Producto para Comprar"
        style={styles.textInput}
        onChangeText={onTextChange}
        value={producto}
      />
      <Button title="Agregar" onPress={onAddProduct} />
    </View>
  );
};

export default ProductInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#dadada",
    width: "75%",
    marginRight: 8,
    padding: 8,
  },
});

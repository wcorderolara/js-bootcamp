import React from "react";
import { View, StyleSheet, Button } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useAuth } from "../store/auth-ctx";

function CustomDrawerMenu(props) {
  const { navigation } = props;
  const { logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate("Restaurants");
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {isAuthenticated ? (
        <View style={styles.buttonContainer}>
          <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
      ) : (
        ""
      )}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
  },
});

export default CustomDrawerMenu;

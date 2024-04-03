import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useAuth } from "../../store/auth-ctx";
import { login } from "../../services/auth-service";
import { useNavigation } from "@react-navigation/core";

const SigninScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveToken } = useAuth();

  async function signinHandler() {
    try {
      const response = await login(email, password);
      saveToken(response.data);
      navigation.navigate("Restaurants");
    } catch (error) {
      const { message } = error.response.data;
      Alert.alert("Error de Autenticacion", message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        placeholder="Email "
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity onPress={signinHandler} style={styles.button}>
        <Text style={styles.text}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff7d0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#fde047",
    color: "#333333",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
  },
});

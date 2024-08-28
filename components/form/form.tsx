import { useState } from "react";
import {
  Alert,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 34,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: `white`,
  },
});

interface FormValues {
  email: string;
  name: string;
  phone: string;
  city: string;
}

export const FormExample = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    name: "",
    phone: "",
    city: "",
  });
  const handleSubmit = () => {
    const { name, email, phone, city } = formValues;
    Alert.alert(
      "Conta Criada!",
      `
      Nome: ${name}\n
      Email: ${email}\n
      Telefone: ${phone}\n
      Cidade: ${formValues.city}
      `,
    );
  };

  const handleInputChange = (key: keyof FormValues, value: string) => {
    setFormValues((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Example</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        keyboardType="email-address"
        style={styles.input}
        value={formValues.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={formValues.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        value={formValues.phone}
        onChangeText={(text) => handleInputChange("phone", text)}
      />

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
        value={formValues.city}
        onChangeText={(text) => handleInputChange("city", text)}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </Pressable>
    </View>
  );
};

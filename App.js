import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [imc , setImc] = useState(0);
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const calcularImc = () => {
 
    const pesoNumero = parseFloat(peso);
    const alturaNumero = parseFloat(altura);

    if (!isNaN(pesoNumero) && !isNaN(alturaNumero)) {
       alturaEmMetros = alturaNumero /100;
      const novoImc = pesoNumero / (alturaEmMetros * alturaEmMetros);
      setImc(novoImc.toFixed(2)); 
      const categoria = avaliarCategoriaIMC(novoImc);
      setResultado(categoria);
    } else { 
      alert('Por favor, insira valores válidos para peso e altura.');
    }
  };

  const avaliarCategoriaIMC = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade severa';
    } else {
      return 'Obesidade morbida';
    }
  };
  return (
    <View style={styles.container}>
      <Text> Entre com o peso</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />
      <Text> Entre com o altura</Text>
       <TextInput
        style={styles.input}
        placeholder="Altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />
<Button title='Calcular' onPress={calcularImc}></Button>
<Text> Seu imc: {imc} </Text>
<Text> resultado: {resultado} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

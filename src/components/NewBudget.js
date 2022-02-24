import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import styles from '../styles/NewBudgetStyles';

const NewBudget = ({handleNewBudget, setBudget, budget}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Definir Presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto. Ej: 300"
        style={styles.input}
        value={budget.toString()}
        onChangeText={setBudget}
      />

      <Pressable style={styles.button} onPress={() => handleNewBudget(budget)}>
        <Text style={styles.buttonText}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

export default NewBudget;

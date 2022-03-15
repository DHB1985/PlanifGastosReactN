import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from '../styles/FilterStryles';

const Filter = ({setFilter, filter, expenses, setExpensesFilteres}) => {
  useEffect(() => {
    if (filter === '') {
      setExpensesFilteres([]);
    } else {
      const expensesFiltered = expenses.filter(
        expense => expense.category === filter,
      );
      setExpensesFilteres(expensesFiltered);
    }
  }, [filter]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtrar Gastos</Text>

      <Picker
        selectedValue={filter}
        onValueChange={value => {
          setFilter(value);
        }}>
        <Picker.Item label="-- Seleccione --" value="" />
        <Picker.Item label="Ahorro" value="saving" />
        <Picker.Item label="Comida" value="foods" />
        <Picker.Item label="Casa" value="house" />
        <Picker.Item label="Gastos Varios" value="expenses" />
        <Picker.Item label="Ocio" value="leisure" />
        <Picker.Item label="Salud" value="health" />
        <Picker.Item label="Suscripciones" value="subscriptions" />
      </Picker>
    </View>
  );
};

export default Filter;

import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

import {amountFormat} from '../utils/utils';

import styles from '../styles/BudgetControlStyles';

const BudgetControl = ({budget, expenses}) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {

    const totalExpenses = expenses.reduce(
      (total, spent) => Number(spent.amount) + total,
      0,
    );
    const totalAvailable = budget - totalExpenses

    setSpent(totalExpenses)
    setAvailable(totalAvailable)
  }, [expenses]);

  return (
    
    <View style={styles.container} >
      <View style={styles.grafCenter}>
        <Image style={styles.img} source={require('../img/grafico.jpg')} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.value}>
          <Text style={styles.label}>Presupuesto: {''} </Text>

          {amountFormat(budget)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Disponible: {''} </Text>

          {amountFormat(available)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Usado: {''} </Text>

          {amountFormat(spent)}
        </Text>
      </View>
    </View>
  );
};

export default BudgetControl;

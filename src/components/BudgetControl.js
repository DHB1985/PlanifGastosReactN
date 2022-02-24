import React from 'react';
import {Text, View, Image} from 'react-native';

import {quantityFormat} from '../utils/utils';

import styles from '../styles/BudgetControlStyles';

const BudgetControl = ({budget}) => {
  return (
    <View style={styles.container}>
      <View style={styles.grafCenter}>
        <Image style={styles.img} source={require('../img/grafico.jpg')} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.value}>
          <Text style={styles.label}>Presupuesto:</Text>

          {quantityFormat(budget)}
        </Text>
     
        <Text style={styles.value}>
          <Text style={styles.label}>Disponible:</Text>

          {quantityFormat(budget)}
        </Text>
     
        <Text style={styles.value}>
          <Text style={styles.label}>Usado:</Text>

          {quantityFormat(budget)}
        </Text>
      </View>
    </View>
  );
};

export default BudgetControl;

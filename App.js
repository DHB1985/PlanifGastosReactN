import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BudgetControl from './src/components/BudgetControl';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

import styles from './src/styles/AppStyles';

const App = () => {
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [budget, setBudget] = useState('');

  const handleNewBudget = budget => {
    if (Number(budget) > 0) {
      setIsValidBudget(true);
    } else {
      Alert.alert('Error', 'El presupuesto debe ser mayor a cero', ['Ok']);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        {!isValidBudget ? (
          <NewBudget
            handleNewBudget={handleNewBudget}
            setBudget={setBudget}
            budget={budget}
          />
        ) : (
          <BudgetControl  budget={budget}/>
        )}
      </View>
    </View>
  );
};

export default App;

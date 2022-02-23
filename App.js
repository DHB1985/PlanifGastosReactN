import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

import styles from './src/styles/AppStyles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget />
      </View>
    </View>
  );
};

export default App;

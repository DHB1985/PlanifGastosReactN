import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import styles from '../styles/HeaderStyles';

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}> 
        Planificador de Gastos
      </Text>
    </SafeAreaView>
  );
};

export default Header;

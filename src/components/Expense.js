import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {dateFormat, amountFormat} from '../utils/utils';

import {iconsDictionary} from '../utils/utils';

import styles from '../styles/ExpenseStyles';

const Expense = ({expense, setModal, setExpense}) => {
  const {name, amount, category, date} = expense;

  const handleActions = () =>{
    setModal(true)
    setExpense(expense)
  }

  return (
    <Pressable onLongPress={handleActions}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={iconsDictionary[category]} />

            <View style={styles.textContainer}>
              <Text style={styles.category}>{category}</Text>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.date}>{dateFormat(date)}</Text>
            </View>
          </View>
          <Text style={styles.amount}>{amountFormat(amount)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Expense;

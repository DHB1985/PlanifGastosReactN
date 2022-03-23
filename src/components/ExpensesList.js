import React from 'react';
import {Text, View} from 'react-native';

import styles from '../styles/ExpensesListStyles';
import Expense from './Expense';

const ExpensesList = ({
  expenses,
  setModal,
  setExpense,
  filter,
  expensesFiltered,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>

      {filter
        ? expensesFiltered.map(expense => (
            <Expense
              expense={expense}
              key={expense.id}
              setModal={setModal}
              setExpense={setExpense}
            />
          ))
        : expenses.map(expense => (
            <Expense
              expense={expense}
              key={expense.id}
              setModal={setModal}
              setExpense={setExpense}
            />
          ))}

      {(expenses.length === 0 || (expensesFiltered === 0 && !!filter)) && (
        <Text style={styles.noExpenses}>No hay Gastos</Text>
      )}
    </View>
  );
};

export default ExpensesList;

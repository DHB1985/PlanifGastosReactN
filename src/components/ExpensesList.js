import React from 'react';
import {Text, View} from 'react-native';

import styles from '../styles/ExpensesListStyles';
import Expense from './Expense';

const ExpensesList = ({expenses, setModal, setExpense}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Gastos</Text>

        {expenses.length === 0 ? 
            <Text style={styles.noExpenses}>No hay gastos</Text> : 
            expenses.map(expense => (
                <Expense 
                    expense={expense} 
                    key={expense.id}
                    setModal={setModal}
                    setExpense={setExpense}
                />
            )
        )} 
    </View>
  );
};

export default ExpensesList;

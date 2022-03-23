import React, {useState, useEffect} from 'react';
import {Alert, ScrollView, View, Pressable, Image, Modal} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import BudgetControl from './src/components/BudgetControl';
import ExpensesList from './src/components/ExpensesList';
import Filter from './src/components/Filter';
import FormSpent from './src/components/FormSpent';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

import styles from './src/styles/AppStyles';
import {idGenerator} from './src/utils/utils';

const App = () => {
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [modal, setModal] = useState(false);
  const [expense, setExpense] = useState({});
  const [filter, setFilter] = useState('');
  const [expensesFiltered, setExpensesFilteres] = useState([]);

  useEffect(() => {
    const getBudgetStorage = async () => {
      try {
        const budgetSorage =
          (await AsyncStorage.getItem('planner_budget')) ?? 0;

        if (budgetSorage > 0) {
          setBudget(budgetSorage);
          setIsValidBudget(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBudgetStorage();
  }, []);

  useEffect(() => {
    const saveExpensesStorage = async () => {
      try {
        await AsyncStorage.setItem(
          'planner_expenses',
          JSON.stringify(expenses),
        );
      } catch (error) {
        console.log(error);
      }
    };
    saveExpensesStorage();
  }, [expenses]);

  useEffect(() => {
    const getExpensesStorage = () => {
      try {
        const expensesStorage = await AsyncStorage.getItem('planner_expenses');

        setExpenses(expensesStorage ? JSON.parse(expensesStorage) : []);
      } catch (error) {
        console.log(error);
      }
    };

    getExpensesStorage();
  }, []);

  useEffect(() => {
    if (isValidBudget) {
      const saveAsSt = async () => {
        try {
          await AsyncStorage.setItem('planner_budget', budget);
        } catch (error) {
          console.log(error);
        }
      };

      saveAsSt();
    }
  }, [isValidBudget]);

  const handleNewBudget = budget => {
    if (Number(budget) > 0) {
      setIsValidBudget(true);
    } else {
      Alert.alert('Error', 'El presupuesto debe ser mayor a cero', ['Ok']);
    }
  };

  const handleExpense = expense => {
    if ([expense.name, expense.category, expense.amount].includes('')) {
      Alert.alert('Error', 'Todos los campos son requeridos');
      return;
    }

    if (expense.id) {
      const expensesEdited = expenses.map(expenseState =>
        expenseState.id === expense.id ? expense : expenseState,
      );
      setExpenses(expensesEdited);
    } else {
      expense.id = idGenerator();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setModal(!modal);
  };

  const deleteExpense = id => {
    Alert.alert(
      '¿Deseas eliminar este gasto?',
      'El gasto no podrá recuperarse.',
      [
        {text: 'No.', style: 'cancel'},
        {
          text: 'Si, Eliminar.',
          onPress: () => {
            const expensesEdited = expenses.filter(
              expenseState => expenseState.id !== id,
            );
            setExpenses(expensesEdited);
            setModal(!Modal);
            setExpense({});
          },
        },
      ],
    );
  };

  const resetApp = () => {
    Alert.alert(
      'Deseas resetear la App?',
      'Esto eliminará el presupuesto y los gastos',
      [
        {text: 'No', style: 'cancel'},
        {
          text: 'Si, Eliminar',
          onPress: async () => {
            try {
              await AsyncStorage.clear();

              setIsValidBudget(false);
              setBudget(0);
              setExpenses([]);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Header />

          {!isValidBudget ? (
            <NewBudget
              handleNewBudget={handleNewBudget}
              setBudget={setBudget}
              budget={budget}
            />
          ) : (
            <BudgetControl
              budget={budget}
              expenses={expenses}
              resetApp={resetApp}
            />
          )}
        </View>
        {isValidBudget && (
          <>
            <Filter
              setFilter={setFilter}
              filter={filter}
              expenses={expenses}
              setExpensesFilteres={setExpensesFilteres}
            />
            <ExpensesList
              expenses={expenses}
              setModal={setModal}
              setExpense={setExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}
            />
          </>
        )}
      </ScrollView>

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => setModal(!modal)}>
          <FormSpent
            setModal={setModal}
            handleExpense={handleExpense}
            expense={expense}
            setExpense={setExpense}
            deleteExpense={deleteExpense}
          />
        </Modal>
      )}

      {isValidBudget && (
        <Pressable style={styles.pressable} onPress={() => setModal(!modal)}>
          <Image
            style={styles.image}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
    </View>
  );
};

export default App;

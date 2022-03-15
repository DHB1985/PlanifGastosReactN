import React, {useState, useEffect} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from '../styles/FormSpentStyles';

const FormSpent = ({
  setModal,
  handleExpense,
  setExpense,
  expense,
  deleteExpense,
}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (expense?.name) {
      setName(expense.name);
      setAmount(expense.amount);
      setCategory(expense.category);
      setDate(expense.date);
      setId(expense.id);
    }
  }, [expense]);

  const handleCancel = () => {
    setModal(false);
    setExpense({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.btn, styles.btnCancel]}
          onLongPress={handleCancel}>
          <Text style={styles.btnText}>Cancelar</Text>
        </Pressable>

        {!!id && (
          <Pressable
            style={[styles.btn, styles.btnDelete]}
            onLongPress={() => deleteExpense(id)}>
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>
          {expense?.name ? 'Editar Gasto' : 'Nuevo Gasto'}
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Nombre Gasto:</Text>

          <TextInput
            placeholder="Nombre del gasto. Ej: Comida"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Cantidad Gasto:</Text>

          <TextInput
            style={styles.input}
            placeholder="Cantidad del gasto. Ej: 200"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Categoría Gasto:</Text>

          <Picker
            selectedValue={category}
            onValueChange={itemValue => {
              setCategory(itemValue);
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

        <Pressable
          style={styles.submitBtn}
          onPress={() => handleExpense({name, amount, category, id, date})}>
          <Text style={styles.submitBtnText}>
            {expense?.name ? 'Guardar Cambios' : 'Agregar Gasto'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default FormSpent;

import {StyleSheet} from 'react-native';
import globalStyles from '.';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E40AF',
    flex: 1,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    flex: 1,
  },
  btnCancel: {
    backgroundColor: '#DB2777',
  },
  btnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
  },

  btnDelete: {
    backgroundColor: 'red',
  },
  form: {
    ...globalStyles.container,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    color: '#64748B',
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  field: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#3B82F6',
    padding: 10,
    marginTop: 20,
  },
  submitBtnText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;

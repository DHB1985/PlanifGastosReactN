import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import globalStyles from './index';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  grafCenter: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DB2777',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
  },
  textBtn: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  // img: {
  //   width:  180,//wp('50%'),
  //   height: 180,//hp('30.2%'),
  // },
  textContainer: {
    marginTop: 30,
  },
  value: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6',
  },
});

export default styles;

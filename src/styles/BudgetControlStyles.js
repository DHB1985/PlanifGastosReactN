import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import globalStyles from './index';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  grafCenter: {
    alignItems: 'center',
  },
  img: {
    width:  180,//wp('50%'),
    height: 180,//hp('30.2%'),
  },
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

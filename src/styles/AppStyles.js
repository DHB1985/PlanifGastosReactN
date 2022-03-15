import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
    minHeight: 400,
  },
  image: {
    width: 60,// wp('30%'),
    height: 60, //hp('30%'),
    position: 'absolute',
    bottom: 40,
    right: 30,
  }
});

export default styles;

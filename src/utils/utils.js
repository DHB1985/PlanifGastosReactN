import {Platform} from 'react-native';
import {formatCurrency} from 'react-native-format-currency';
export const quantityFormat = quantity => {
  if (Platform.OS === 'android') {
    return formatCurrency({amount: Number(quantity), code: 'USD'})[0];
  } else {
    return Number(quantity).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
};

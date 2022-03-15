// import {Platform} from 'react-native';
// import {formatCurrency} from 'react-native-format-currency';

// export const amountFormat = amount => {
//   if (Platform.OS === 'android') {
//     return formatCurrency({amount: Number(amount), code: 'USD'})[0];
//   } else {
//     return Number(amount).toLocaleString('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     });
//   }
// };
export const amountFormat = amount => {
  return Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const idGenerator = () => {
  return Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
};

export const iconsDictionary = {
  saving: require('../img/icono_ahorro.png'),
  foods: require('../img/icono_comida.png'),
  house: require('../img/icono_casa.png'),
  expenses: require('../img/icono_gastos.png'),
  leisure: require('../img/icono_ocio.png'),
  health: require('../img/icono_salud.png'),
  subscriptions: require('../img/icono_suscripciones.png'),
};

export const dateFormat = date =>{
  const newDate = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }

  return newDate.toLocaleDateString('es-ES', options)
}
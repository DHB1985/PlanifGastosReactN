import {StyleSheet} from 'react-native'
import globalStyles from './index';

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container,
        transform: [{translateY: 0}],
        marginTop: 80
    },
    label:{
        fontSize: 22,
        fontWeight: '900',
        color: '#64748B',
    },
})

export default styles
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'end',
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    text: {
        color: 'white',
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});

export default styles;
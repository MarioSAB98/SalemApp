import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    deviceContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    titles: {
        marginTop: 10,
        width: '100%',
        alignItems: 'left',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    subtitle: {
        fontSize: 14,
        color: '#5c5e62'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    }
});

export default styles;
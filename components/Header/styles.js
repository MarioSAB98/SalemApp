import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'darkgreen',
    },
    containerItems: {
        position: 'absolute',
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    logoItems: {
        flexDirection: 'row',
    },
    logoImage: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },
    logoText: {
        fontSize: 24,
        color: 'white',
        top: 12,
    },
    menu: {
        width: 25,
        height: 25,
        top: 20,
        right: 10,
        resizeMode: 'contain',
    }
});

export default styles;
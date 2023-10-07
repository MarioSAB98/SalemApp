import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <View style={styles.logoItems}>
                    <Image style={styles.logoImage} source={require('../../assets/images/logo1.png')} />
                    <Text style={styles.logoText}>SalemApp</Text>
                </View>
                <Pressable onPress={() => console.log("menu pressed")}>
                    <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
                </Pressable>
            </View>
        </View>
    );
};

export default Header;
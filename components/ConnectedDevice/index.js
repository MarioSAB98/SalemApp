import React from 'react';
import { View, Text, } from 'react-native';
import styles from "./styles";

const ConnectedDeivce = (props) => {

    const { name, tagline, taglineCTA } = props.device;

    return (
        <View style={styles.deviceContainer}>

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default ConnectedDeivce;
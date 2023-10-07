import React from 'react';
import { View, FlatList } from 'react-native';
import ConnectedDevice from "../ConnectedDevice";
import StyledButton from "../StyledButton"

import styles from './styles';
import devices from './devices';

const DevicesList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={devices}
                renderItem={({ item }) => <ConnectedDevice device={item} />}
                showsVerticalScrollIndicator={false}
            />
            <StyledButton />
        </View>
    );
};

export default DevicesList;
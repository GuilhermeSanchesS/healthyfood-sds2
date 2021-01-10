import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <Text style={styles.text}>Healthy Food</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00C853',
        height: 80,
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#FFFFFF',
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default Header;
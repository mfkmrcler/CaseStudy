import React from "react";
import { StyleSheet, Text } from 'react-native';

const Header = (props) => {
    return (
        <Text style={[styles.title, { color: props.color }]}>
            {props.title}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'left',
        paddingLeft: 20,
        marginHorizontal: 8,
        maxWidth: '70%',
    },
});

export default Header;

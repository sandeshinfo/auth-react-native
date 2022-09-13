import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomButton = ({ text, icon, buttonColor, iconPadding, buttonWidth = "100%", iconRightBorder, iconSize = 30, iconColor = "#fff", textColor = "#fff", onPress }) => {
    return (

        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
            <View style={{
                ...styles.container,
                width: buttonWidth,
                backgroundColor: buttonColor,
                justifyContent: !icon ? 'center' : 'flex-start'
            }}>
                {icon && <FontAwesome5 name={icon} size={iconSize}
                    style={{
                        ...styles.FontAwesome5,
                        color: iconColor,
                        borderRightWidth: iconRightBorder,
                        marginHorizontal: 15,
                        paddingHorizontal: iconPadding ?? 0

                    }}></FontAwesome5>}
                {text && <Text style={{ ...styles.text, color: textColor }}>{text}</Text>}
            </View>
        </TouchableOpacity >

    );
};

const styles = StyleSheet.create({

    container: {

        height: 60,
        width: 60,
        marginVertical: 5,
        borderRadius: (65 / 2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'

    },
    text: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 15,
        padding: 2
    },

    FontAwesome5: {
        color: 'red',
        // fontSize: 25,
        borderRightColor: 'red',
        borderStyle: 'solid',

    }
});

export default CustomButton


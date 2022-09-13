import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor="#fff"
                style={styles.input}
                secureTextEntry={secureTextEntry}>
            </TextInput>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        // paddingHorizontal:10,
        marginVertical: 5,
    },
    input: {
        color: 'white',
        fontSize: 20

    }
});
export default CustomInput


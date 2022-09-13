import { View, Image, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/download.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import SignInScreen from '../SignInScreen';
import FirstScreen from '../FirstScreen';


const SignUpScreen = () => {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [reenterpassword, setrePassword] = useState('')
    const navigation = useNavigation();
    const handleSave = () => {
        navigation.navigate(SignInScreen)
    }
    const handleCancel = () => {
        navigation.navigate(FirstScreen)
    }
    return (
        <LinearGradient colors={['#ff6a00', '#ee0979']} style={styles.linearGradient}>
            <View style={styles.root}>

                <View>
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="cover" />

                    <Text style={styles.baseText}>CONN
                        <Text style={styles.innerText}>EXION</Text></Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 10,
                        width: 140,
                        textAlign: "center"
                    }} > Find and Meet people around{'\n'}
                        you to find LOVE</Text>
                </View>

                <View>
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}>CREATE YOUR LOGIN</Text>

                </View>

                <View style={{ width: '100%' }}>
                    <CustomInput
                        placeholder="FullName"
                        value={fullname}
                        setValue={setFullname}>
                    </CustomInput>
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry>
                    </CustomInput>
                    <CustomInput
                        placeholder="Re-Enter Password"
                        value={reenterpassword}
                        setValue={setrePassword}
                        secureTextEntry>
                    </CustomInput>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <CheckBox
                            checked={true}
                            containerStyle={{
                                backgroundColor: 'transparent'
                            }}
                            checkedColor='white'
                        // title="" 
                        />
                        <Text style={{ color: 'white' }}>Agree to Terms & Conditions</Text>
                    </View>

                </View>

                <View style={{ display: 'flex', flexDirection: 'row-reverse', }}>
                    <CustomButton text='SAVE' buttonWidth={150} buttonColor="#fff" textColor="red" onPress={handleSave}></CustomButton>
                    <CustomButton text='CANCEL' onPress={handleCancel}></CustomButton>
                </View>
                <View>
                    <Text style={{ color: 'white' }}>Agree to Terms & Conditions</Text>
                </View>

            </View>

        </LinearGradient>
    );
};


const styles = StyleSheet.create({




    baseText: {
        fontWeight: 'bold',
        fontSize: 30

    },
    innerText: {
        color: 'blue'
    },
    root: {
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        maxWidth: 200,
        height: 100,
    },
    linearGradient: {
        flex: 1,
        height: '100%',
        // paddingLeft: 25,
        // paddingRight: 25,
    },

})
export default SignUpScreen
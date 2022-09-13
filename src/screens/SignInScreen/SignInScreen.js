import { View, Image, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/download.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';





const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <LinearGradient colors={['#ff6a00', '#ee0979']} style={styles.linearGradient}>
            <View style={styles.root}>

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
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
                        textAlign: 'center'

                    }} > Find and Meet people around
                        you to find LOVE</Text>
                </View>

                <View>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>SIGN IN</Text>

                </View>

                <View style={{ width: '100%' }}>
                    <CustomInput
                        placeholder="Enter Email"
                        value={email}
                        setValue={setEmail}>
                    </CustomInput>
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry>
                    </CustomInput>
                </View>
                <View>
                    <CustomButton text='GET STARTED' buttonColor='white' textColor='red'></CustomButton>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                    <CustomButton icon={"facebook"} iconSize={30} buttonColor='white' iconColor='red' />
                    <CustomButton icon={"twitter"} iconSize={30} buttonColor='white' iconColor='red' />

                </View>

                <Text style={{ color: 'white' }}>FORGET PASSWORD</Text>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ color: 'white' }}>DON'T HAVE ACCOUNT ?</Text>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <Text style={{
                            color: 'white',
                            textDecorationLine: "underline",
                            marginLeft: 10
                        }}>SIGN UP</Text>
                    </TouchableWithoutFeedback>
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
        width: '100%',
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

export default SignInScreen
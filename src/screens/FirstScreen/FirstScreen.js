import React from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Logo from '../../../assets/download.png';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import SignInScreen from "../SignInScreen";
import SignUpScreen from "../SignUpScreen";


const FirstScreen = () => {
    const navigation = useNavigation();
    const handleSignUp = () => {
        navigation.navigate(SignUpScreen)
    }
    const handleSignIn = () => {
        navigation.navigate(SignInScreen)
    }


    return (
        <LinearGradient colors={['#ff6a00', '#ee0979']} style={styles.linearGradient}>
            <View style={styles.root} >
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Image
                        source={Logo}
                        style={[styles.logo]}
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
                <View style={{ width: '100%' }}>
                    <CustomButton
                        text="Sign in with Facebook"
                        iconColor='red'
                        iconSize={20}
                        iconPadding={10}
                        buttonColor='white'
                        textColor='red'
                        onPress={handleSignIn}
                        icon={"facebook"}
                        iconRightBorder={2}
                    />
                    <CustomButton
                        text="Sign in with Twitter"
                        iconColor='red'
                        iconSize={20}
                        iconPadding={10}
                        buttonColor='white'
                        textColor='red'
                        onPress={handleSignIn}
                        icon={"twitter"}
                        iconRightBorder={2}
                    />
                    <CustomButton text="Sign Up"
                        buttonColor='white'
                        textColor='red'
                        onPress={handleSignUp} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                    <Text style={{ color: 'white' }}>Already registered ? </Text>
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <Text style={{
                            color: 'white',
                            textDecorationLine: "underline",
                        }}>Sign in</Text>
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
        padding: 20

    },

    linearGradient: {
        flex: 1,
        height: '100%'
    },


    logo: {
        maxWidth: 200,
        height: 100,
    },
});

export default FirstScreen
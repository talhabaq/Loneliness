import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomInput from '../components/CustomInput';

import CustomButton from '../components/CustomButton';
const ForgetPassword = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
    const [email, setEmail] = useState("")
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    }
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />

            </TouchableOpacity>
            <Text style={styles.header}>
                Forget Password 🔑
            </Text>
            <Text style={styles.desc}>Lost Your Way?Let's Get You Back In by resetting your password</Text>
            <CustomInput
                inputName={'Email'}
                keyboardType={'email-address'}
                secureTextEntry={false}
                onChangeText={(text) => setEmail(text)}
                iconName={'email'}
                touchableIcon={false}
                iconStyle={styles.emailIcon}
                customContainer={styles.emailInput}
            />

            <CustomButton
                style={styles.loginBtn}
                title={'Send Code'}
                onPress={() => navigation.navigate("OtpVerification")}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#111111',
    },
    backArrow: {
        height: hp(15),
        width: wp(15),
        resizeMode: 'contain',
        left: wp(5),

    },
    header: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 25,
        left: wp(10)
    },
    desc: {
        color: '#C3C3C3',
        fontWeight: "500",
        width: wp(80),
        fontSize: 11,
        left: wp(10),
        top: hp(2)
    },
    emailIcon: {
        top: hp(6.5),
        position: 'absolute',
        left: hp(2)
    },
    emailInput: {
        top: hp(5)
    },
    loginBtn: {
        top: hp(20)
    }
})
export default ForgetPassword
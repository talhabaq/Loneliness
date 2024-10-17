import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const { width, height } = Dimensions.get('window')
const SignUp = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [isPasswordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

    const [isChecked, setIsChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible); // Toggle the password visibility
    }

    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State to toggle password visibility
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!isPasswordVisible); // Toggle the password visibility
    }



    return (
        <View style={styles.main}>
            <TouchableOpacity
                onPress={() => navigation.navigate("SignIn")}
            >
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backarrow}
                />
            </TouchableOpacity>
            <ScrollView >
                <Image
                    source={require('../assets/images/CreateAccountText.png')}
                    style={styles.maintext}
                />
                <Image
                    source={require('../assets/images/CreateText.png')}
                    style={styles.CreateText}
                />
                <View style={{ bottom: hp(16) }}>
                    <CustomInput
                        inputName={'Email'}
                        keyboardType={'email-address'}
                        secureTextEntry={false}
                        onChangeText={(text) => setEmail(text)}
                        iconName={'email'}
                        touchableIcon={false}
                        iconStyle={styles.emailIcon}
                    />
                    <CustomInput
                        inputName={'Password'}
                        keyboardType={'password'}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={(text) => setPassword(text)}
                        iconName={'eye'}
                        touchableIcon={true}
                        iconStyle={styles.passwordIcon}
                        onIconPress={togglePasswordVisibility}
                    /><CustomInput
                        inputName={'Confirm Password'}
                        keyboardType={'password'}
                        secureTextEntry={!isConfirmPasswordVisible}
                        onChangeText={(text) => setConfirmPassword(text)}
                        iconName={'eye'}
                        touchableIcon={true}
                        iconStyle={styles.passwordIcon}
                        onIconPress={toggleConfirmPasswordVisibility}
                    />

                    <CheckBox
                        isChecked={isChecked}
                        onClick={() => setIsChecked(!isChecked)}
                        checkBoxColor="#FCE220"
                        uncheckedCheckBoxColor="#C3C3C3"
                        style={styles.checkbox}
                        rightText={'Remember Me'}
                        rightTextStyle={styles.rightText}
                    />


                    <View style={styles.Bar} />
                    <View>
                        <Text style={styles.simpleText}>Already have an account? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignIn")}
                        ><Text style={styles.login}>Log In</Text></TouchableOpacity>
                    </View>
                    <View>
                        <CustomButton
                            title='Sign Up'
                            onPress={() => navigation.navigate("Name")}
                            style={{ marginTop: 35 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#111111"
    },
    backarrow: {
        height: hp(17),
        width: wp(17),
        resizeMode: 'contain',
        left: 20,
    },
    maintext: {
        height: hp(10),
        width: wp(65),
        resizeMode: 'contain',
        bottom: hp(3),
        left: wp(6.5)
    },
    CreateText: {
        height: hp(20),
        width: wp(80),
        resizeMode: 'contain',
        left: wp(6.5),
        bottom: hp(11)
    },
    Bar: {
        height: 2,
        width: 340,
        backgroundColor: "rgba(255, 255, 255, 0.19)",
        top: 15,
        left: 10
    },
    simpleText: {
        top: 40,
        left: 55,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 1)'
    },
    login: {
        color: 'rgba(252, 226, 32, 1)',
        textDecorationLine: "underline",
        top: 20,
        left: 270,
        fontWeight: "bold"
    },
    emailIcon: {
        top: hp(6.5),
        position: 'absolute',
        left: hp(2)
    },
    passwordIcon: {
        top: hp(6.5),
        left: wp(80),
        position: 'absolute'
    },
    label: {
        top: "18%",
        color: '#FFFFFF'
    },
    rightText: {
        color: '#FFFFFF',
    },
    checkbox: {
        left: wp(6),
    },
})
export default SignUp
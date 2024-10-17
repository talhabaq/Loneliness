import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomInput from '../components/CustomInput';
import CheckBox from 'react-native-check-box';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {
        setModalVisible(true);

        setTimeout(() => {
            setModalVisible(false);
            navigation.navigate('HomeTabs');
        }, 2000);
    };

    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("Path")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.header}>Welcome Back 👋</Text>
                <Text style={styles.desc}>Please enter your email and Password to sign in</Text>
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
                <CustomInput
                    inputName={'Password'}
                    keyboardType={'password'}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={(text) => setPassword(text)}
                    iconName={'eye'}
                    touchableIcon={true}
                    iconStyle={styles.passwordIcon}
                    onIconPress={togglePasswordVisibility}
                    customContainer={styles.passwordInput}
                />
                <View>
                    <CheckBox
                        isChecked={isChecked}
                        onClick={() => setIsChecked(!isChecked)}
                        checkBoxColor="#FCE220"
                        uncheckedCheckBoxColor="#C3C3C3"
                        style={styles.checkbox}
                        rightText={'Remember Me'}
                        rightTextStyle={styles.rightText}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text style={styles.forgetPassword}>Forget Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Bar} />
                <Text style={styles.donthaveText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.createText}>Create One</Text>
                </TouchableOpacity>

                <CustomButton
                    style={styles.loginBtn}
                    title={'Log In'}
                    onPress={handleLogin} // Use handleLogin to show modal and navigate
                />
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Image
                        source={require("../assets/images/LogInSucces.png")}
                        style={styles.modalContent}
                    />
                </View>
            </Modal>
        </View>
    );
};

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
        left: wp(10),
    },
    desc: {
        color: '#C3C3C3',
        fontWeight: "500",
        width: wp(80),
        fontSize: 11,
        left: wp(10),
        top: hp(2),
    },
    emailIcon: {
        top: hp(6.5),
        position: 'absolute',
        left: hp(2),
    },
    emailInput: {
        top: hp(5),
    },
    passwordIcon: {
        top: hp(6.5),
        left: wp(80),
        position: 'absolute',
    },
    passwordInput: {
        top: hp(5),
    },
    rightText: {
        color: '#FFFFFF',
        width:wp(10)
    },
    checkbox: {
        top: hp(5),
        left: wp(6),
    },
    forgetPassword: {
        top: hp(1.7),
        color: "#FCE220",
        left: wp(57),
        fontWeight: 'bold',
        fontSize: 15,
        position: "absolute",
    },
    Bar: {
        height: hp(0.5),
        width: wp(98),
        backgroundColor: "rgba(255, 255, 255, 0.19)",
        top: hp(7),
        alignSelf: "center",
    },
    donthaveText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: "bold",
        left: wp(6),
        top: hp(10),
    },
    createText: {
        color: '#FCE220',
        fontSize: 17,
        fontWeight: 'bold',
        top: hp(6.5),
        left: wp(65),
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: '#FCE220',
        position: "absolute",
    },
    loginBtn: {
        top: hp(20),
    },
    modalView: {
        flex: 1,
        backgroundColor: "#55555573",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: wp(80),
        height: hp(50)
    }
});

export default Login;

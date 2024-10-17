import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ResetPassword = ({ navigation }) => {
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
                <Text style={styles.header}>Reset Password 🔒</Text>
                <Text style={styles.desc}>Create Your New Password</Text>
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
                <CustomInput
                    inputName={'Confirm Password'}
                    keyboardType={'password'}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={(text) => setPassword(text)}
                    iconName={'eye'}
                    touchableIcon={true}
                    iconStyle={styles.passwordIcon}
                    onIconPress={togglePasswordVisibility}
                    customContainer={styles.passwordInput}
                />
                <CustomButton
                    style={styles.loginBtn}
                    title={'Reset'}
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
                        source={require("../assets/images/ResetPasswordModal.png")}
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
    passwordIcon: {
        top: hp(6.5),
        left: wp(80),
        position: 'absolute',
    },
    passwordInput: {
        top: hp(5),
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

export default ResetPassword

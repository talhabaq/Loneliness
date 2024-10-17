import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';

const OtpVerification = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
    const [isFocused, setIsFocused] = useState(false);
    const allInputsFilled = otp.every(value => value.length === 1);
    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to the next input if there's a digit
        if (text.length === 1 && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }

        // Automatically move to the previous input if backspace is pressed
        if (text === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const handlePress = () => {
        if (allInputsFilled) {
            navigation.navigate("ResetPassword")
        }
        else {
            Alert.alert("Enter Complete Otp")
        }
    }
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <Text style={styles.header}>Verification 🔐</Text>
            <Text style={styles.desc}>A 4-digit verification code has been sent to your@email.com</Text>

            <View style={styles.container}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        style={[
                            styles.input,

                            isFocused && {
                                backgroundColor: '#111111',
                                borderColor: '#FCE220'
                            }
                        ]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        maxLength={1}
                        keyboardType="number-pad"
                        value={value}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                ))}

            </View>
            <CustomButton
                style={[styles.btn, { backgroundColor: allInputsFilled ? '#FCE220' : '#434343' }]} // Change colors based on input status
                title={'Verify'}
                disabled={!allInputsFilled} // Disable the button if inputs are not filled
                onPress={handlePress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#111111'
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
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: "10%",
        marginTop: hp(15),
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        width: wp(13),
        height: hp(6),
        borderRadius: 20,
        backgroundColor: '#222222',
        marginLeft: '5%',
        color:'#FFFFFF'
    },
    btn: {
        marginBottom: 30
    }
});

export default OtpVerification;

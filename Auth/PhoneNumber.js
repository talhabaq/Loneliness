import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, } from 'react-native';
import React, { useState, useRef } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CountryCodePicker from '../components/CountryCodePicker';
// import PhoneInput from 'react-native-phone-number-input'
const PhoneNumber = ({ navigation }) => {
    const phoneInput = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isPickerVisible, setPickerVisible] = useState(false);
    const [countryCode, setCountryCode] = useState(null)
    const handleCountrySelect = (country) => {
        setCountryCode(country?.callingCode[0])
    };
    const handleContinue = () => {
        if (typeof phoneNumber === 'string' && phoneNumber.trim().length === 0) {
            Alert.alert('Please enter your Number');
        } else {
            navigation.navigate('ProfilePhoto');
        }
    };
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("Name")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/LoaderAcc2.png')}
                style={styles.loader}
            />
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={styles.mainText}>Enter Your Phone Number</Text>
                    <Text style={styles.desc}>We only use Phone Number to make sure {'\n'} everyone on Loneliness is real</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <CountryCodePicker onSelectCountry={handleCountrySelect}
                        customStyle={styles.countrycode}
                    />
                    <CustomInput
                        onChangeText={(text) => setPhoneNumber(text)}
                        placeholder={'phoneNumber'}
                        custoMStyle={styles.phoneInput}
                    />
                </View>

            </View>
            <View style={{}}>
                <Image
                    source={require('../assets/images/PrivacyText.png')}
                    style={styles.PrivacyText}
                />
                <View style={styles.Bar} />
                <CustomButton
                    title='Continue'
                    style={[phoneNumber ? styles.buttonActive : styles.buttonDisabled]}
                    disabled={!phoneNumber}
                    onPress={handleContinue}
                />
            </View>
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
        position: 'absolute',
    },
    loader: {
        height: hp(5),
        width: wp(50),
        resizeMode: 'contain',
        top: hp(5),
        alignSelf: "center",
        marginLeft: 20
    },
    mainText: {
        fontWeight: "bold",
        fontSize: 23,
        alignSelf: 'center',
        top: hp(10),
        color: '#FFFFFF'
    },
    desc: {
        top: hp(10),
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    PrivacyText: {
        height: hp(10),
        width: wp(80),
        resizeMode: 'contain',
        alignSelf: "center",
    },
    Bar: {
        height: hp(0.5),
        width: wp(100),
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        bottom: 13
    },
    phoneInputContainer: {
        height: hp(10),
        width: wp(90),
        alignSelf: 'center',
        top: hp(15),
        backgroundColor: "#434343",
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        overflow: 'hidden',
    },
    textContainer: {
        backgroundColor: "#434343",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    countrycode: {
        height: hp(6.5),
        marginBottom: 10,
    },
    phoneInput: {
        height: hp(6.6),
        width: wp(60),
        marginTop: 63,
        left: wp(7),
    },
    buttonDisabled: {
        backgroundColor: 'gray',
        bottom: 7
    },
    buttonActive: {
        backgroundColor: 'yellow',
        bottom: 7
    }
});
export default PhoneNumber;

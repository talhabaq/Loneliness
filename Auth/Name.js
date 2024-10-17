import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';

const Name = ({ navigation }) => {
    const [name, setName] = useState('')
    const handleContinue = () => {
        if (typeof name === 'string' && name.trim().length === 0) {
            Alert.alert('Please enter your full name');
        } else {
            navigation.navigate('PhoneNumber');
        }
    };

    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/LoaderAcc.png')}
                style={styles.loader}
            />
            <View>
                <Text style={styles.mainText}>Your Loneliness Identity</Text>
                <Text style={styles.desc}>Tell us your full name that represents you.{'\n'}It's how others will know and remember you</Text>
            </View>
            <View>
                <TextInput
                    placeholder='Full Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={[styles.textInput, name ? styles.inputFilled : styles.inputEmpty]}
                    placeholderTextColor='rgba(195, 195, 195, 1)'
                />
            </View>
            <View style={styles.Bar} />
            <CustomButton
                title='Continue'
                style={[name ? styles.buttonActive : styles.buttonDisabled]}
                disabled={!name} 
                onPress={handleContinue} 
            />
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
        marginLeft: 20,
        alignSelf: 'center'
    },
    mainText: {
        fontWeight: "bold",
        fontSize: 23,
        left:wp(5),
        top: hp(10),
        color: "#FFFFFF"
    },
    desc: {
        alignSelf: "center",
        top: hp(10),
        color: '#FFFFFF'
    },
    textInput: {
        height: 70,
        width: 260,
        backgroundColor: 'rgba(67, 67, 67, 1)',
        left: 50,
        top: 150,
        borderRadius: 50,
        textAlign: "center",
        borderWidth: 2,
    },
    Bar: {
        height: "0.5%",
        width: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        top: "63%",
    },
    inputFilled: {
        borderColor: 'yellow',
        color: 'yellow',
    },
    buttonDisabled: {
        backgroundColor: 'gray',
        top: '65%'
    },
    buttonActive: {
        backgroundColor: 'yellow',
        top: '65%'
    },
    inputEmpty: {
        borderColor: 'gray',
        color: 'gray',
    },
});

export default Name;

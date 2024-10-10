import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
const DateofBirth = ({ navigation }) => {
    const [date, setDate] = useState('');

    const handleDateChange = (text) => {
        // Remove any non-numeric characters and ensure the input doesn't exceed 8 digits
        let cleaned = text.replace(/[^\d]/g, '');

        // Format: Add '|' after 2nd and 4th digits for DD|MM|YYYY
        if (cleaned.length >= 3) {
            cleaned = `${cleaned.slice(0, 2)}|${cleaned.slice(2)}`;
        }
        if (cleaned.length >= 6) {
            cleaned = `${cleaned.slice(0, 5)}|${cleaned.slice(5, 9)}`;
        }

        setDate(cleaned);
    };

    const handleContinue = () => {
        if (typeof date === 'string' && date.trim().length === 0) {
            Alert.alert('Please enter your date of birth');
        } else {
            navigation.navigate('Gender');
        }
    };
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/LoaderAcc5.png')}
                style={styles.loader}
            />
      <View style={{flex:1}}>
      <View>
                <Text style={styles.mainText}>Let's Celebrate You</Text>
                <Text style={styles.desc}>Tell us your Birthday.Your Profile doesn't{'\n'}display your birthday,only age</Text>
            </View>
            <Image
                source={require('../assets/images/BirthdayCake.png')}
                style={styles.birthdayCake}
            />
            <CustomInput
                custoMStyle={styles.input}
                value={date}
                onChangeText={handleDateChange}
                placeholder="DD     |    MM    |     YYYY"
                keyboardType="numeric"
            />
      </View>
            <View style={styles.Bar} />
            <CustomButton
                title='Continue'
                style={[date ? styles.buttonActive : styles.buttonDisabled]}
                disabled={!date} // Disable button if input is empty
                onPress={handleContinue} // Use the handleContinue function
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
        left: wp(9),
        top: hp(10),
        color: "#FFFFFF"
    },
    desc: {
        alignSelf: "center",
        top: hp(10),
        color: '#FFFFFF'
    },
    birthdayCake: {
        height: hp(10),
        width: wp(30),
        resizeMode: 'contain',
        alignSelf: 'center',
        top:80
    },
    input: {
        textAlign: "center",
        top:80
    },
    Bar: {
        height: "0.5%",
        width: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        bottom:"5%"
    },
    buttonDisabled: {
        backgroundColor: 'gray',
        bottom:'3%'
    },
    buttonActive: {
        backgroundColor: 'yellow',
        bottom:'3%'
    },
})
export default DateofBirth
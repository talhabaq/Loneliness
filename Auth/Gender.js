import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';

const Gender = ({ navigation }) => {
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);

    const handleFemale = () => {
        setFemale(true);
        setMale(false);
        setOther(false);
    };

    const handleMale = () => {
        setFemale(false);
        setMale(true);
        setOther(false);
    };

    const handleOther = () => {
        setFemale(false);
        setMale(false);
        setOther(true);
    };

    // Determine if any gender option is selected
    const isGenderSelected = male || female || other;

    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("DateofBirth")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/LoaderAcc6.png')}
                style={styles.loader}
            />
            <View>
                <Text style={styles.mainText}>Be True To Yourself</Text>
                <Text style={styles.desc}>Choose the gender that best represents you. Authenticity is the key to meaningful connections.</Text>
            </View>
            <View style={{ flex: 1, top: hp(15) }}>
                <CustomButton
                    title={'Male'}
                    textStyle={styles.text}
                    onPress={handleMale}
                    style={[male ? styles.buttonActive : styles.buttonDisabled]}
                />
                <CustomButton
                    title={'Female'}
                    textStyle={styles.femaletext}
                    style={[female ? styles.buttonActive : styles.buttonDisabled]}
                    onPress={handleFemale}
                />
                <CustomButton
                    title={'Other'}
                    textStyle={styles.text}
                    style={[other ? styles.buttonActive : styles.buttonDisabled]}
                    onPress={handleOther}
                />
            </View>
            <View style={styles.Bar} />
            <CustomButton
                title='Continue'
                style={isGenderSelected ? styles.cnbuttonActive : styles.cnbuttonDisabled} // Change button color based on selection
                onPress={() => {
                    if (isGenderSelected) {
                        navigation.navigate('Name'); // Change to your next screen
                    } else {
                        Alert.alert('Please select a gender option before continuing.');
                    }
                }}
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
        alignSelf: 'center',
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 23,
        left: wp(9),
        top: hp(10),
        color: '#FFFFFF',
    },
    desc: {
        alignSelf: 'center',
        top: hp(10),
        color: '#FFFFFF',
    },
    text: {
        right: wp(30),
        fontSize: 16,
    },
    femaletext: {
        right: wp(28),
        fontSize: 16,
    },
    buttonDisabled: {
        backgroundColor: 'gray',
        marginBottom: 15,
    },
    buttonActive: {
        backgroundColor: 'yellow',
        marginBottom: 15,
    },
    Bar: {
        height: '0.5%',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        bottom: 10,
    },
    cnbuttonDisabled: {
        backgroundColor: 'gray',
    },
    cnbuttonActive: {
        backgroundColor: 'yellow',
    },
});

export default Gender;

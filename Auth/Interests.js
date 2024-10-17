import { View, Text, Image, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';

const Interests = ({ navigation }) => {
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
            <TouchableOpacity onPress={() => navigation.navigate("LookingFor")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/LoaderAcc8.png')}
                style={styles.loader}
            />
            <View>
                <Text style={styles.mainText}>Select Your Interests</Text>
                <Text style={styles.desc}>Select your interest and unlock your perfect matches.</Text>
            </View>
            <View style={{ flex: 1, top: hp(15) }}>
                <CustomButton
                    title={'👩‍❤️‍💋‍👩 Date'}
                    textStyle={styles.text}
                    onPress={handleMale}
                    style={[male ? styles.buttonActive : styles.buttonDisabled]}
                    isIconShow={true}
                />
                <CustomButton
                    title={'🍴 Lunch'}
                    textStyle={styles.femaletext}
                    style={[female ? styles.buttonActive : styles.buttonDisabled]}
                    onPress={handleFemale}
                />
                <CustomButton
                    title={'🐟 Dinner'}
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
                        navigation.navigate('Location'); 
                    } else {
                        Alert.alert('Please choose At least 1 interest');
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
        left:wp(9),
        top: hp(10),
        color: '#FFFFFF',
        width:wp(80)
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

export default Interests;

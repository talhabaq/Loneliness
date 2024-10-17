import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../components/CustomButton';
import Geolocation from '@react-native-community/geolocation';

const handlePress=()=>{
    Geolocation.getCurrentPosition(info => console.log(info));
}
const Location = ({ navigation }) => {
    return (

        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate("Interests")}>
                <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../assets/images/LoaderAcc9.png')}
                style={styles.loader}
            />
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../assets/images/MapIcon.png')}
                    style={styles.mapIcon}
                />
                <Text style={styles.header}>Enable Location</Text>
                <Text style={styles.desc}>You need to Enable Location to be able to use Mobile App.</Text>
            </View>
            <View style={{
                flex: 1,
                top: hp(15)
            }}>
                <View style={styles.Bar} />
                <CustomButton
                    title={"Use My Current Location"}
                    style={styles.cnBtn}
                    onPress={handlePress}
                />
                <CustomButton
                    title={'Enter Location Manually'}
                    style={styles.mnBtn}
                    textStyle={styles.mnText}
                />
            </View>
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
    mapIcon: {
        alignSelf: 'center',
        height: hp(20),
        width: hp(30),
        resizeMode: 'contain',
        top: hp(27)
    },
    header: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        top: hp(30)
    },
    desc: {
        width: wp(70),
        alignSelf: 'center',
        color: '#FFFFFF',
        fontWeight: "600",
        top: hp(30)
    },
    Bar: {
        height: "1%",
        width: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        top: hp(10)
    },
    cnBtn: {
        top: hp(13)
    },
    mnBtn: {
        top: hp(15),
        backgroundColor: '#111111',
        borderColor: '#FCE220',
        borderWidth: 1
    },
    mnText: {
        color: '#FCE220'
    }
})
export default Location
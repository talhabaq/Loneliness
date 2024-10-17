import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const CustomButton = ({ onPress, title, style, textStyle, isIconShow = false ,iconSource}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.login, style]}
        >
            {
                isIconShow ?
                    <Image
                        source={iconSource}
                        style={styles.googleIcon} />
                    : null
            }
            <Text style={[styles.logInBtn,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    login: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(6.5),
        width: wp(88),
        backgroundColor: '#FCE220',
        alignSelf: "center",
        borderRadius: 20,
        // position: "absolute",
        // top:hp(65)
    },
    logInBtn: {
        color: '#191919',
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    googleIcon: {
        height: hp(8),
        width: wp(8),
        resizeMode: 'contain',
        left: wp(6),
        position: 'absolute'
    },
})

export default CustomButton
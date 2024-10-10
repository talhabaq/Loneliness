import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const CountryCodePicker = ({ onSelectCountry, customStyle }) => {
    const [countryCode, setCountryCode] = useState('DE');
    const [callingCode, setCallingCode] = useState('49');
    const [countryName, setCountryName] = useState('Germany');
    const [isPickerVisible, setPickerVisible] = useState(false);

    const handleCountrySelect = (country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
        setCountryName(country.name);
        if (onSelectCountry) {
            onSelectCountry(country);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.picker, customStyle]}
                onPress={() => setPickerVisible(true)}
            >
                <CountryPicker
                    withFlagButton={false}
                    countryCode={countryCode}
                    withFilter
                    withCallingCode
                    withModal
                    withAlphaFilter
                    visible={isPickerVisible}
                    onClose={() => setPickerVisible(false)}
                    onSelect={handleCountrySelect}
                    flatListProps={{
                        keyboardShouldPersistTaps: 'always'
                    }}
                />
                <Text style={styles.text}>{countryCode} (+{callingCode})</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center' ,
    },
    picker: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 90,
        width: wp(20),
        left:wp(5.5),
        borderRadius: 20,
        backgroundColor: "#434343",
        borderColor: '#C3C3C3',
        borderWidth:1
    },
    text: {
        fontSize: 12,
        left:7
    },
});

export default CountryCodePicker;

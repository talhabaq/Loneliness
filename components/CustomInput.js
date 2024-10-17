import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInput = ({
    value,
    onChangeText,
    secureTextEntry,
    inputName,
    keyboardType,
    iconName,
    onIconPress,
    touchableIcon,
    iconStyle,
    custoMStyle,
    multiline,
    customContainer,
    maxLength,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={[customContainer, styles.Container]}>
            <Text style={styles.inputName}>{inputName}</Text>
            <TextInput
                maxLength={maxLength}
                multiline={multiline}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={[
                    styles.textInput,
                    custoMStyle,
                    isFocused && {
                        backgroundColor: '#111111',
                        borderColor: '#FCE220'
                    }
                ]}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
            />
            {
                touchableIcon ? (
                    <TouchableOpacity onPress={onIconPress} style={[iconStyle, styles.icon]} >
                        <MaterialCommunityIcons
                            name={iconName}
                            size={20}
                            color={isFocused ? '#FCE220' : '#C3C3C3'}
                        />
                    </TouchableOpacity>
                ) : (
                    <View style={[iconStyle, styles.icon]}>
                        <MaterialCommunityIcons
                            name={iconName}
                            size={20}
                            color={isFocused ? '#FCE220' : '#C3C3C3'}
                        />
                    </View>
                )
            }
        </View>
    );
};
const styles = StyleSheet.create({
    textInput: {
        height: 45,
        paddingHorizontal: 40,// changing cursor position
        backgroundColor: '#434343',
        borderColor: '#C3C3C3',
        borderWidth: 1,
        borderRadius: 25,
        color: '#C3C3C3',  // Default text color
    },
    Container: {
        marginBottom: '5%',
        alignSelf: "center",
        width: '90%',
    },
    inputName: {
        marginBottom: '3.5%',
        fontSize: 16,
        fontWeight: "bold",
        color: '#C3C3C3',
        left: '5%'
    },
    icon: {
        tintColor: '#C3C3C3',
        position: 'absolute'
    }
});
export default CustomInput;

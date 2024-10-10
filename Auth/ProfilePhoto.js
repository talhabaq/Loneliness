import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import CustomButton from '../components/CustomButton';
const ProfilePhoto = ({ navigation }) => { // Added navigation prop
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // To store the selected image
    const [error, setError] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const selectImage = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        if (result.didCancel) {
            console.log('User cancelled image picker');
        } else if (result.error) {
            console.log('ImagePicker Error: ', result.error);
        } else {
            console.log(result)
            setSelectedImage(result.assets[0].uri); 
            setModalVisible(false);
        }
    };

    const takePhoto = async () => {
        const result = await launchCamera({ mediaType: 'photo' });
        if (result.didCancel) {
            console.log('User cancelled camera');
        } else if (result.error) {
            console.log('Camera Error: ', result.error);
        } else {
            console.log(result)
            setSelectedImage(result.assets[0].uri); // Update state with the captured image URI
            setModalVisible(false);
        }
    };
    const handlePress = () => {
        setIsFocused(true);
        if (!selectedImage) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        } else {
            setError(false);
            navigation.navigate('About')
        }
    };

    return (
        <View style={styles.main}>
            {
                error ?
                    (
                        <Image
                            source={require('../assets/images/PictureError.png')}
                            style={styles.pictureError} />
                    ) : (

                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("PhoneNumber")}>
                                <Image
                                    source={require('../assets/images/Back.png')}
                                    style={styles.backArrow}
                                />
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/images/LoaderAcc3.png')}
                                style={styles.loader}
                            />
                        </View>

                    )
            }
            <View>
                <Text style={styles.mainText}>Show Your Best Self</Text>
                <Text style={styles.desc}>Upload your best photo to make a fantastic{'\n'}first impression. Let Your Personality shine.</Text>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                {selectedImage ? (
                    <Image
                        source={{ uri: selectedImage }}
                        style={styles.selectedImage}
                    />) : (
                    <View style={styles.imagepicker}>
                        <Image
                            source={require('../assets/images/CameraIcon.png')}
                            style={styles.cameraIcon}
                        />
                    </View>
                )}
                <Image
                    source={require('../assets/images/YellowBackground.png')}
                    style={styles.yellowBackground}
                />
                {
                    selectedImage ?
                        (<Image
                            source={require('../assets/images/PencilIcon.png')}
                            style={styles.pencilIcon}
                        />) : (<Image
                            source={require('../assets/images/Plus.png')}
                            style={styles.plus}
                        />)
                }
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.modalText}>Upload Photos From</Text>
                           <TouchableOpacity
                           onPress={() => setModalVisible(false)}
                           >
                           <Image
                                source={require('../assets/images/SmallCross.png')}
                                style={styles.smallCross}
                            />
                           </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                           onPress={selectImage}
                           >
                           <Image
                                source={require('../assets/images/YourPhotos.png')}
                                style={styles.yourPhotos}
                            />
                           </TouchableOpacity>
                           <TouchableOpacity
                           onPress={takePhoto}
                           >
                           <Image
                                source={require('../assets/images/FromCamera.png')}
                                style={styles.fromCamera}
                            />
                           </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.Bar} />
            <CustomButton
                title='Continue'
                style={[selectedImage ? styles.buttonActive : styles.buttonDisabled]}
                disabled={!selectedImage}
                onPress={handlePress}
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
    pictureError: {
        height: hp(30),
        width: wp(85),
        bottom: hp(80),
        resizeMode: 'contain',
        alignSelf: 'center',
        position: 'absolute'
    },
    mainText: {
        fontWeight: "bold",
        fontSize: 23,
        left:wp(6),
        top: hp(10),
        color: '#FFFFFF'
    },
    desc: {
        alignSelf: "center",
        top: hp(10),
        color: '#FFFFFF'
    },
    imagepicker: {
        height: hp(25),
        width: wp(50),
        backgroundColor: '#434343',
        borderRadius: 100,
        alignSelf: 'center',
        top: hp(17)
    },
    cameraIcon: {
        height: hp(15),
        width: wp(15),
        resizeMode: "contain",
        alignSelf: 'center',
        top: hp(5)
    },
    yellowBackground: {
        height: hp(7),
        width: wp(9),
        position: 'absolute',
        top: hp(37),
        left: wp(60)
    },
    pencilIcon: {
        height: hp(3),
        width: wp(7),
        top: hp(38.5),
        left: wp(60.3),
        position: 'absolute'
    },
    plus: {
        height: hp(6),
        width: wp(8),
        top: hp(37.2),
        left: wp(60.3),
        position: 'absolute'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55555573',
    },
    modalContent: {
        height: hp(35),
        width: wp(80),
        backgroundColor: '#111111',
        borderRadius: 10,
        bottom: hp(5)
    },
    selectedImage: {
        height: hp(25),
        width: wp(50),
        backgroundColor: '#434343',
        borderRadius: 100,
        alignSelf: 'center',
        top: hp(17)
    },
    buttonActive: {
        backgroundColor: 'yellow',
        top: '50%'
    },
    buttonDisabled: {
        backgroundColor: 'gray',
        top: '50%'
    },
    Bar: {
        height: "0.5%",
        width: "100%",
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        top: "47%",
    },
    smallCross: {
        height:hp(8),
        width:wp(8),
        bottom:10,
        left:70
    },
    modalText:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'bold',
        padding:10
    },
    yourPhotos:{
        height:hp(18),
        width:wp(30),
        resizeMode:'contain',
        top:20,
        left:20,
        position:'absolute'
    },
    fromCamera:{
        height:hp(18),
        width:wp(30),
        resizeMode:'contain',
        top:20,
        left:150,
        position:'absolute'
    }
});

export default ProfilePhoto;

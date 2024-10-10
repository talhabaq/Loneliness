import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomButton from '../components/CustomButton';
const PathScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);
  return (
    <View style={{ flex: 1, backgroundColor: '#111111' }}>
      <View>
        <Image
          source={require('../assets/images/border2.png')}
          style={styles.img1}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn')
          }
          }
        >
          <Image
            source={require('../assets/images/Back.png')}
            style={styles.BackArrow}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../assets/images/LeftBorder.png')}
          style={styles.img2}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Logo2.png')}
          style={styles.Logo}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Text3.png')}
          style={styles.Text}
        />
      </View>
      <View style={styles.optionContainer}>
        {/* Buddy */}
        <TouchableOpacity
          style={[
            styles.option1,
            selected === 'buddy' && styles.selectedOption,
          ]}
          onPress={() => setSelected('buddy')}
        >
          <Image source={require('../assets/images/Buddy.png')} style={styles.image} />
          <Text style={styles.optionText}>Buddy</Text>
        </TouchableOpacity>
        {/* Buddy Finder */}
        <TouchableOpacity
          style={[
            styles.option2,
            selected === 'buddyFinder' && styles.selectedOption,
          ]}
          onPress={() => setSelected('buddyFinder')}
        >
          <Image source={require('../assets/images/BuddyFinder.png')} style={styles.image} />
          <Text style={styles.optionText}>Buddy Finder</Text>
        </TouchableOpacity>
      </View>
      {/* Continue Button */}
          <CustomButton 
          title='Continue'
        disabled={!selected} // disable if no option is selected
        onPress={() => { navigation.navigate('HomeTabs') }}
        style={[
          styles.continueButton,
          selected && styles.continueButtonActive,
        ]}
        textStyle={[
          styles.btnText,
          selected && styles.btnTextActive,
        ]}
          />
    </View>
  )
}
const styles = StyleSheet.create({
  img1: {
    width: wp(27),
    height: hp(20),
    resizeMode: "contain",
    top: hp(-4),
    left: hp(40),
    position: 'absolute'
  },
  BackArrow: {
    height: hp(15),
    width: wp(15),
    resizeMode: "contain",
    position: 'absolute',
    left: wp(8),
    top: hp(2)
  },
  img2: {
    width: wp(20),
    height: hp(20),
    top: hp(16),
    right: wp(82),
    position: 'absolute'
  },
  Logo: {
    height: hp(40),
    width: wp(30),
    resizeMode: 'contain',
    alignSelf: 'center',
    top: hp(7),
    position: 'absolute'
  },
  Text: {
    height: hp(40),
    width: wp(80),
    resizeMode: "contain",
    position: 'absolute',
    alignSelf: 'center',
    top: hp(25)
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(10)
  },
  option1: {
    backgroundColor: '#434343',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey', // default border color
    alignSelf: 'center',
    left: wp(13),
    top: hp(51),
    height: hp(20),
    width: wp(35),
    alignItems: 'center',
    position: 'absolute'
  },
  option2: {
    backgroundColor: '#434343',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey', // default border color
    alignSelf: 'center',
    left: wp(53),
    top: hp(51),
    height: hp(20),
    width: wp(35),
    alignItems: 'center',
    position: 'absolute'
  },
  selectedOption: {
    borderColor: '#FFD700', // highlight border when selected
  },
  image: {
    width: wp(15),
    height: hp(15),
    resizeMode: 'contain'
  },
  optionText: {
    color: 'white',
  },
  continueButton: {
    backgroundColor: '#E7E7E7',
    top:hp(75)
  },
  continueButtonActive: {
    backgroundColor: '#FFD700', // active button color when option is selected
  },
  btnText:{
    color:"#6C6C6C"
  },
  btnTextActive:{
    color:"#191919"
  }
})
export default PathScreen
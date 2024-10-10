import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomButton from '../components/CustomButton'
const SignIn = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Path')
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#111111' }}>
      <View>
        <Image
          source={require('../assets/images/border2.png')}
          style={styles.img1}
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
          source={require('../assets/images/People.png')}
          style={styles.people}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Text2.png')}
          style={styles.Text}
        />
      </View>
      <CustomButton
        onPress={handlePress}
        title='Log In'
        style={{top:hp(77)}}
      />
      <CustomButton
        title='Continue With Google'
        onPress={handlePress}
        style={styles.google}
        textStyle={styles.googletext}
        isIconShow={true}
      />
      <View style={styles.signUpView}>
        <Text style={{color:'#FFFFFF'}}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SignUp')
          }
        >
          <Text style={styles.signUpText}>Create One?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  img1: {
    width: wp(32),
    height: hp(14),
    left: wp(80),
    position: 'absolute'
  },
  Logo: {
    height: hp(13),
    width: wp(20),
    alignSelf: 'center',
    top: hp(8),
    resizeMode: 'contain',
    position: 'absolute'
  },
  people: {
    height: hp(80),
    width: wp(80),
    top: hp(2),
    resizeMode: "contain",
    alignSelf: 'center',
    position: 'absolute'
  },
  Text: {
    height: hp(30),
    width: wp(100),
    top: hp(54),
    alignSelf: "center",
    resizeMode: 'contain',
    position: 'absolute'
  },
  google: {
    backgroundColor: '#111111',
    borderColor: 'rgba(252, 226, 32, 1)',
    borderWidth: 2, 
    top:hp(79)
  },
  googletext: {
    color: '#FCE220'
  },
  signUpView: {
    height: hp(7),
    width: wp(90),
    top: hp(82),
    left: wp(14),
    flexDirection: 'row',
  },
  signUpText: {
    color: 'rgba(252, 226, 32, 1)',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgba(252, 226, 32, 1)'
  }
})
export default SignIn
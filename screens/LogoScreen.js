import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Logo = ({ navigation }) => {
  useEffect(()=>{
   const time= setTimeout(()=>{
        navigation.navigate('SignIn')
    },1000)
    return(()=>{
      clearTimeout(time)
    })
  },[])
  return (
    <View style={{ flex: 1, backgroundColor: '#111111' }}>
      <View>
        <Image
          source={require('../assets/images/BorderTopRight.png')}
          style={styles.img1}
        />
      </View>
      <View >
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logoImg} />
      </View>
      <View style={styles.logo}>
        <Image
          source={require('../assets/images/Loading.png')}
          style={styles.loadingImg} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  img1: {
    width: wp(30),
    height: hp(30),
    left: wp(72),
    transform: [{ rotate: '-35deg' }],
    position: 'absolute',
  },
  logoImg: {
    width: wp(30),
    height: hp(25),
    top: hp(25),
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',

  },
  loadingImg: {
    height: hp(5),
    width: wp(55),
    resizeMode: 'contain',
    top: hp(50),
    position: "absolute",
    alignSelf: 'center'
  }
})

export default Logo
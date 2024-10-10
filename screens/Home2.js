import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const data = [
  { image: "https://i.pinimg.com/736x/7c/1d/62/7c1d62ec12b29aebc2429ff0e9fd81c8.jpg" }
]
const Home2 = () => {
  const [showHomeContent, setShowHomeContent] = useState(true);
  useEffect(() => {
    // Set a timer for 2 seconds to switch from animation to Home content
    const timer = setTimeout(() => {
      setShowHomeContent(false);
    }, 3000);
    return () => clearTimeout(timer); // Cleanup function
  }, []);
  const RenderItem = () => (
    <View style={{ alignItems: 'center', justifyContent: "center" }}>
      <Image
        source={{ uri: "https://i.pinimg.com/736x/7c/1d/62/7c1d62ec12b29aebc2429ff0e9fd81c8.jpg" }}
        style={styles.peaky}
      />
      <TouchableOpacity>
        <Image
          source={require('../assets/images/CrossMark.png')}
          style={styles.crossMark}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/AddToFavoriteIcon.png')}
          style={styles.addToFav}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/NextIcon.png')}
          style={styles.nextIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/DirectChat.png')}
          style={styles.directChat}
        />
      </TouchableOpacity>
      <Text style={styles.peakyname}>
        Peaky Blinders
      </Text>
      <Text style={styles.distance}>
        5KM Away
      </Text>
    </View>
  )
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111111' }}>
      {showHomeContent ? (
        // Display the animation
        <LinearGradient
          colors={['#111111', '#111111', '#363213', '#6E6417']}
          style={styles.LinearGradient}
        >
          <View>
            <Image
              source={require('../assets/images/Logo2.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Image
              source={require('../assets/images/LonelinessText.png')}
              style={styles.loneliness}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/Notification.png')}
                style={styles.bellicon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity >
              <Image
                source={require('../assets/images/DrawerIcon.png')}
                style={styles.drawer}
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: "center" }}>
            <LottieView style={{ height: hp(50), width: wp(100), top: hp(18),position:"absolute",alignSelf:"center" }} source={require('../assets/animations/Circle.json')} autoPlay loop />
            <Image
              source={{ uri: "https://feji.us/lqbc74" }}
              style={{ height: hp(8), width: wp(16), borderColor: 'yellow', borderRadius: 50, borderWidth: 2 ,top:hp(39)}}
            />
          </View>
          <View>
            <Image
              source={require('../assets/images/FindingPeopleText.png')}
              style={styles.text}
            />
          </View>
        </LinearGradient>
      ) : (
        // Display the Home 2 content
        <LinearGradient
          colors={['#111111', '#111111', '#363213', '#6E6417']}
          style={styles.LinearGradient}
        >
          <View>
            <Image
              source={require('../assets/images/Logo2.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Image
              source={require('../assets/images/LonelinessText.png')}
              style={styles.loneliness}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/Notification.png')}
                style={styles.bellicon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity >
              <Image
                source={require('../assets/images/DrawerIcon.png')}
                style={styles.drawer}
              />
            </TouchableOpacity>
          </View>
          <RenderItem />
        </LinearGradient>
      )}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  logo: {
    height: hp(10),
    width: wp(10),
    resizeMode: "contain",
    top: hp(3),
    position: 'absolute',
    left: wp(5)
  },
  loneliness: {
    height: hp(9),
    width: wp(43),
    resizeMode: 'contain',
    left: wp(25),
    top: hp(3),
    position: 'absolute'
  },
  bellicon: {
    height: hp(10),
    width: wp(10),
    resizeMode: 'contain',
    top: hp(3),
    left: wp(73),
    position: 'absolute'
  },
  drawer:
  {
    height: hp(10),
    width: wp(10),
    resizeMode: 'contain',
    top: hp(3),
    left: wp(86),
    position: 'absolute'
  },
  personFinder: {
    height: hp(60),
    width: wp(80),
    resizeMode: 'cover',
    top: hp(25),
    position: 'absolute'
  },
  text: {
    height: hp(20),
    width: wp(60),
    resizeMode: 'contain',
    left: wp(20),
    top: hp(55)
  },
  LinearGradient: {
    height: hp(100),
    width: wp(100),
  },
  peaky:
  {
    height: hp(60),
    width: wp(80),
    resizeMode: 'cover',
    top: hp(15),
    position: 'absolute'
  },
  crossMark: {
    height: hp(15), width: wp(15),
    position: 'absolute',
    resizeMode: "center",
    top: hp(55),
    right: wp(15)
  },
  addToFav: {
    height: hp(20), width: wp(20),
    position: 'absolute',
    resizeMode: "center",
    top: hp(52),
    left: wp(-12)
  },
  nextIcon:
  {
    height: hp(15), width: wp(15),
    position: 'absolute',
    resizeMode: "center",
    top: hp(55),
    left: wp(12)
  },
  directChat: {
    height: hp(20), width: wp(20),
    position: 'absolute',
    resizeMode: "center",
    top: hp(43),
    left: wp(22)
  },
  peakyname: {
    fontFamily: 'Gill Sans',
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
    top: hp(48),
    position: 'absolute',
    left: wp(13)
  },
  distance: {
    fontFamily: 'Gill Sans',
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    top: hp(52),
    position: 'absolute',
    left: wp(13)
  }
})
export default Home2
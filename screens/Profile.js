import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const data = [
  { icon: 'https://rb.gy/svphvc', name: "My Wallet", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://rb.gy/vkftec', name: "Go Premium", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://rb.gy/fxsdoq', name: "Update Profile", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://rb.gy/h3yyil', name: "Change Password", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://bit.ly/3zw9sG3', name: "Rate App", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://bit.ly/4euFBfZ', name: "Share App", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://bit.ly/3XNJWWo', name: "Privacy Policy", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://feji.us/rm3lvo', name: "Terms And Conditions", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://feji.us/ihlzfb', name: "Logout", arrow: "https://feji.us/mx5l1u" },
  { icon: 'https://feji.us/zn02w5', name: "Delete Account", arrow: "https://feji.us/mx5l1u" },
]
const App = () => {
  const renderItem = ({ item, index }) => (
    <View >
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
      >
        <Image
          source={{ uri: item.icon }}
          style={styles.icon}
        />
        <Text style={styles.name}>
          {item.name}
        </Text>
        <Image
          source={{ uri: item.arrow }}
          style={styles.arrow}
        />
      </TouchableOpacity>
      {index !== data.length - 1 ? <View style={styles.bar}></View> : null}
    </View>
  )
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111111' }}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.toString() + index}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  )
}
const Header = () => {
  return (
    <View>
      <View>
        <Image
          source={require('../assets/images/Logo2.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Profile.png')}
          style={styles.loneliness}
        />
      </View>
      <View style={styles.view}>
        <Image
          source={{ uri: "https://feji.us/lqbc74" }}
          style={styles.mainImg}
        />
        <View>
          <Text style={styles.Title}>
            Olivia Williams
          </Text>
          <Text style={styles.gender}>
            Male
          </Text>
        </View>
        <Image
          source={{ uri: "https://feji.us/mx5l1u" }}
          style={styles.ViewArrow}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  logo: {
    height: hp(10),
    width: wp(10),
    resizeMode: "contain",
    top: hp(3),
    left: wp(5)
  },
  loneliness: {
    height: hp(9),
    width: wp(43),
    resizeMode: 'contain',
    alignSelf: 'center',
    bottom: hp(7)
  },
  mainImg: {
    height: hp(9),
    width: wp(18),
    resizeMode: 'cover',
    borderRadius: 50,
    top: hp(0.5),
    left: wp(2),
  },
  icon: {
    height: hp(6),
    width: wp(6),
    resizeMode: 'contain',
    tintColor: '#FCE220',
    left: wp(10),
  },
  name: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    left: wp(19),
    top: hp(2),
    color: "#FFFFFF"
  },
  arrow: {
    height: hp(4.5),
    width: wp(4.5),
    resizeMode: "contain",
    tintColor: "white",
    top: hp(1),
    right: wp(10)
  },
  bar: {
    height: hp(0.1),
    width: wp(90),
    backgroundColor: '#FFFFFF33',
    alignSelf: 'center',
  },
  view: {
    backgroundColor: "yellow",
    borderRadius: 10,
    height: hp(10),
    width: wp(85),
    bottom: hp(5),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  Title: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    top: hp(1.4),
    left: wp(5),
  },
  gender: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
    top: hp(2),
    left: wp(5),
  },
  ViewArrow: {
    height: hp(5),
    width: wp(5),
    resizeMode: 'contain',
    left: wp(73),
    top: hp(2.3)
  },
  listContainer: {
    top: hp(28)
  }

})
export default App
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const data = [
  { profileimg: "https://feji.us/lqbc74", name: "Olivia Williams", address: "MISIGUN HHUHIAH HUHAU" },
  { profileimg: "https://feji.us/ifca1r", name: "Martin Super", address: "MISIGUN HHUHIAH HUHAU" },
  { profileimg: "https://shorturl.at/9npVX", name: "Alex William", address: "MISIGUN HHUHIAH HUHAU" },
  { profileimg: "https://tinyurl.com/h5wctz49", name: "Shane Watson", address: "MISIGUN HHUHIAH HUHAU" },
  { profileimg: "https://shorturl.at/thonP", name: "Olivia Williams", address: "MISIGUN HHUHIAH HUHAU" },
]
const App = () => {
  const buttons = ['Upcoming', 'Requested', 'Completed']
  const [activeIndex, setActiveIndex] = useState(null)
  const RenderItem = ({ item }) => (
    <View style={styles.PersonsList}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            source={{ uri: item.profileimg }}
            style={styles.ProfileImg}
          />
        </View>
        <View >
          <Text style={styles.ProfileName}>{item.name}</Text>
          <Text style={styles.Profilesub}>Category</Text>
          <Text style={styles.Datet}>Date</Text>
          <View>
            <Image
              source={require("../assets/images/TickTak.png")}
              style={styles.tick}
            />
            <Text style={styles.Lunch}>                             Lunch</Text>
            <Text style={styles.Date}>24/05/2024/03:00pm</Text>
          </View>
        </View>
      </View>

      <View style={styles.bar}></View>

      <View style={{ flexDirection: "row" }}>
        <Image source={require('../assets/images/Locator.png')}
          style={styles.locator}
        />
        <Text style={styles.address}>
          {item.address}
        </Text>
      </View>
    </View>
  )
  return (
    <View style={{ flex: 1, backgroundColor: '#111111' }}>
      <View>
        <Image
          source={require('../assets/images/Logo2.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Services.png')}
          style={styles.loneliness}
        />
      </View>
      <View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/SearchIcon.png')}
              style={styles.drawer}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Mainbtn}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.btn1,
                activeIndex === index ? styles.activeButton : styles.inactiveButton
              ]}
              onPress={() => setActiveIndex(index)}
            >
              <Text
                style={[
                  styles.buttonText,
                  activeIndex === index ? styles.activeText : styles.inactiveText
                ]}
              >
                {button}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item, index) => item.toString() + index}
        scrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
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
    alignSelf: 'center',
    top: hp(3),
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
  Mainbtn:
  {
    backgroundColor: ' rgba(252, 226, 32, 0.2)',
    height: hp(8),
    width: wp(90),
    borderRadius: 14,
    alignSelf: 'center',
    top: hp(13),
    position: 'absolute',
    flexDirection: 'row'
  },
  btn1: {
    height: hp(6),
    width: wp(26),
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 10,
    position: 'relative',
    top: hp(1),
    left: wp(3.5)
  },
  activeButton: {
    backgroundColor: 'yellow',
  },
  inactiveButton: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold"
  },
  activeText: {
    color: 'black',
  },
  inactiveText: {
    color: 'yellow',
  },
  PersonsList:
  {
    flex:1,
    width: wp(90),
    height: hp(18),
    backgroundColor: "gray",
    borderRadius: 15,
    left: wp(5),
    marginBottom: 10,
    position: "relative",
    top: hp(23),
    borderWidth:2,
    borderColor:"#C3C3C3"
  },
  ProfileImg: {
    height: hp(10),
    width: wp(20),
    resizeMode: 'cover',
    borderRadius: 10,
    left: wp(2.5),
    position: 'absolute',
    top: hp(1.6)
  },
  ProfileName: {
    fontSize: 16,
    fontWeight: "bold",
    top: hp(2),
    left: wp(25),
    color: 'white',
    position: 'absolute'
  },
  Profilesub: {
    top: hp(6),
    left: wp(25),
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    fontWeight: 'bold'
  },
  tick: {
    height: hp(4),
    width: wp(9),
    resizeMode: "contain",
    left: wp(78),
    position: 'absolute'
  },
  Lunch:
    { top: hp(6), left: wp(48), fontSize: 12, position: 'absolute' },
  Date:
    { top: hp(10), left: wp(50), fontSize: 12, position: 'absolute' },
  bar: {
    height: hp(0.15),
    width: wp(84),
    backgroundColor: 'white',
    position: "absolute",
    top: hp(13),
    position: "absolute",
    left: wp(2)
  },
  address: {
    top: hp(14),
    left: wp(18),
    fontWeight: '700',
    position: 'absolute'
  },
  locator: {
    height: hp(7.8), width: wp(7.8),
    resizeMode: 'contain', position: 'absolute',
    left: wp(5),
    top: hp(11.4)
  },
  Datet: {
    top: hp(9.5),
    left: wp(25),
    color: 'white',
    fontSize: 14,
    position: 'absolute',
    fontWeight: 'bold'
  }
})
export default App
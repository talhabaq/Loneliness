import { View, Text, SafeAreaView, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const data = [
  { name: 'John lobon', photo: "https://feji.us/ifca1r", messege: "How are You Today", time: '2 min ago', status: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUD/wH////4//iH/4dE/0M8/zsa/xn7//v0//Sc/5yq/6or/yrZ/9kO/w3A/8BP/09BAUSKAAABYklEQVR4nO3WuW7DMBRFQVLUQm3W//9t5MiG4yBlCMLETKXynuZRIf6U+mEMn20c+vTWFJ4fU54/Pe5lnPP0uzAva+1Z/2pd8ltht6W99qZ/tqetexV2t6P2oAKOW/csbDPwmXgv3NoMPBO3qzCn2kuKSfleOC2tHZmXfZnOwtzWM/FuzWfhXHtFUfNZ2M6fzF/Gs7D2hsJiaPeQXlLoa08orA9D7QmFDaHtQxOa7wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBrG2gMKG8NQe0JhQ+hrTyisD6n2hMJSiLUnFBZDbPvUjGfhXHtEUfNZmNfaKwpa81k4LXvtHcXsy3QWxtzuOU053gvjdtReUsixxauwu7WZeNy6R2GjiVfgVRi7LbV2bva0fQc+Cs9zs7T1aKxLfpQ9C+OU53b+bsY5T/F34bfUD5+eOQ59emv6AvaABU1uAb2NAAAAAElFTkSuQmCC" },
  { name: 'Jane Kiya', photo: "https://shorturl.at/mABH3", messege: "How are You Today", time: '2 min ago', status: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUD/wH////4//iH/4dE/0M8/zsa/xn7//v0//Sc/5yq/6or/yrZ/9kO/w3A/8BP/09BAUSKAAABYklEQVR4nO3WuW7DMBRFQVLUQm3W//9t5MiG4yBlCMLETKXynuZRIf6U+mEMn20c+vTWFJ4fU54/Pe5lnPP0uzAva+1Z/2pd8ltht6W99qZ/tqetexV2t6P2oAKOW/csbDPwmXgv3NoMPBO3qzCn2kuKSfleOC2tHZmXfZnOwtzWM/FuzWfhXHtFUfNZ2M6fzF/Gs7D2hsJiaPeQXlLoa08orA9D7QmFDaHtQxOa7wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBrG2gMKG8NQe0JhQ+hrTyisD6n2hMJSiLUnFBZDbPvUjGfhXHtEUfNZmNfaKwpa81k4LXvtHcXsy3QWxtzuOU053gvjdtReUsixxauwu7WZeNy6R2GjiVfgVRi7LbV2bva0fQc+Cs9zs7T1aKxLfpQ9C+OU53b+bsY5T/F34bfUD5+eOQ59emv6AvaABU1uAb2NAAAAAElFTkSuQmCC" },
  { name: 'Lobe Torew', photo: "https://shorturl.at/9npVX", messege: "How are You Today", time: '2 min ago', status: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUD/wH////4//iH/4dE/0M8/zsa/xn7//v0//Sc/5yq/6or/yrZ/9kO/w3A/8BP/09BAUSKAAABYklEQVR4nO3WuW7DMBRFQVLUQm3W//9t5MiG4yBlCMLETKXynuZRIf6U+mEMn20c+vTWFJ4fU54/Pe5lnPP0uzAva+1Z/2pd8ltht6W99qZ/tqetexV2t6P2oAKOW/csbDPwmXgv3NoMPBO3qzCn2kuKSfleOC2tHZmXfZnOwtzWM/FuzWfhXHtFUfNZ2M6fzF/Gs7D2hsJiaPeQXlLoa08orA9D7QmFDaHtQxOa7wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBrG2gMKG8NQe0JhQ+hrTyisD6n2hMJSiLUnFBZDbPvUjGfhXHtEUfNZmNfaKwpa81k4LXvtHcXsy3QWxtzuOU053gvjdtReUsixxauwu7WZeNy6R2GjiVfgVRi7LbV2bva0fQc+Cs9zs7T1aKxLfpQ9C+OU53b+bsY5T/F34bfUD5+eOQ59emv6AvaABU1uAb2NAAAAAElFTkSuQmCC" },
  { name: 'StARK SDK', photo: "https://feji.us/ifca1r", messege: "How are You Today", time: '2 min ago', status: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUD/wH////4//iH/4dE/0M8/zsa/xn7//v0//Sc/5yq/6or/yrZ/9kO/w3A/8BP/09BAUSKAAABYklEQVR4nO3WuW7DMBRFQVLUQm3W//9t5MiG4yBlCMLETKXynuZRIf6U+mEMn20c+vTWFJ4fU54/Pe5lnPP0uzAva+1Z/2pd8ltht6W99qZ/tqetexV2t6P2oAKOW/csbDPwmXgv3NoMPBO3qzCn2kuKSfleOC2tHZmXfZnOwtzWM/FuzWfhXHtFUfNZ2M6fzF/Gs7D2hsJiaPeQXlLoa08orA9D7QmFDaHtQxOa7wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBrG2gMKG8NQe0JhQ+hrTyisD6n2hMJSiLUnFBZDbPvUjGfhXHtEUfNZmNfaKwpa81k4LXvtHcXsy3QWxtzuOU053gvjdtReUsixxauwu7WZeNy6R2GjiVfgVRi7LbV2bva0fQc+Cs9zs7T1aKxLfpQ9C+OU53b+bsY5T/F34bfUD5+eOQ59emv6AvaABU1uAb2NAAAAAElFTkSuQmCC" },
  { name: 'Shanes Navi', photo: "https://shorturl.at/thonP", messege: "How are You Today", time: '2 min ago', status: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUD/wH////4//iH/4dE/0M8/zsa/xn7//v0//Sc/5yq/6or/yrZ/9kO/w3A/8BP/09BAUSKAAABYklEQVR4nO3WuW7DMBRFQVLUQm3W//9t5MiG4yBlCMLETKXynuZRIf6U+mEMn20c+vTWFJ4fU54/Pe5lnPP0uzAva+1Z/2pd8ltht6W99qZ/tqetexV2t6P2oAKOW/csbDPwmXgv3NoMPBO3qzCn2kuKSfleOC2tHZmXfZnOwtzWM/FuzWfhXHtFUfNZ2M6fzF/Gs7D2hsJiaPeQXlLoa08orA9D7QmFDaHtQxOa7wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBrG2gMKG8NQe0JhQ+hrTyisD6n2hMJSiLUnFBZDbPvUjGfhXHtEUfNZmNfaKwpa81k4LXvtHcXsy3QWxtzuOU053gvjdtReUsixxauwu7WZeNy6R2GjiVfgVRi7LbV2bva0fQc+Cs9zs7T1aKxLfpQ9C+OU53b+bsY5T/F34bfUD5+eOQ59emv6AvaABU1uAb2NAAAAAElFTkSuQmCC" },
  { name: 'Mirza  Usew', photo: "https://shorturl.at/GESPQ", messege: "How are You Today", time: '2 min ago', status: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUD/wH////4//iH/4dE/0M8/zsa/xn7//v0//Sc/5yq/6or/yrZ/9kO/w3A/8BP/09BAUSKAAABYklEQVR4nO3WuW7DMBRFQVLUQm3W//9t5MiG4yBlCMLETKXynuZRIf6U+mEMn20c+vTWFJ4fU54/Pe5lnPP0uzAva+1Z/2pd8ltht6W99qZ/tqetexV2t6P2oAKOW/csbDPwmXgv3NoMPBO3qzCn2kuKSfleOC2tHZmXfZnOwtzWM/FuzWfhXHtFUfNZ2M6fzF/Gs7D2hsJiaPeQXlLoa08orA9D7QmFDaHtQxOa7wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBrG2gMKG8NQe0JhQ+hrTyisD6n2hMJSiLUnFBZDbPvUjGfhXHtEUfNZmNfaKwpa81k4LXvtHcXsy3QWxtzuOU053gvjdtReUsixxauwu7WZeNy6R2GjiVfgVRi7LbV2bva0fQc+Cs9zs7T1aKxLfpQ9C+OU53b+bsY5T/F34bfUD5+eOQ59emv6AvaABU1uAb2NAAAAAElFTkSuQmCC" },
  { name: 'Chris Don', photo: "https://tinyurl.com/h5wctz49", messege: "How are You Today", time: '2 min ago', status: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEUD/wH////4//iH/4dE/0M8/zsa/xn7//v0//Sc/5yq/6or/yrZ/9kO/w3A/8BP/09BAUSKAAABYklEQVR4nO3WuW7DMBRFQVLUQm3W//9t5MiG4yBlCMLETKXynuZRIf6U+mEMn20c+vTWFJ4fU54/Pe5lnPP0uzAva+1Z/2pd8ltht6W99qZ/tqetexV2t6P2oAKOW/csbDPwmXgv3NoMPBO3qzCn2kuKSfleOC2tHZmXfZnOwtzWM/FuzWfhXHtFUfNZ2M6fzF/Gs7D2hsJiaPeQXlLoa08orA9D7QmFDaHtQxOa7wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBrG2gMKG8NQe0JhQ+hrTyisD6n2hMJSiLUnFBZDbPvUjGfhXHtEUfNZmNfaKwpa81k4LXvtHcXsy3QWxtzuOU053gvjdtReUsixxauwu7WZeNy6R2GjiVfgVRi7LbV2bva0fQc+Cs9zs7T1aKxLfpQ9C+OU53b+bsY5T/F34bfUD5+eOQ59emv6AvaABU1uAb2NAAAAAElFTkSuQmCC" },
];
const Chat = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Chatting")
          }}
        >
          <Image
            source={{ uri: item.photo }}
            style={styles.profileImg}
          />
        </TouchableOpacity>
        <Image
          source={{ uri: item.status }}
          style={styles.status}
        />
      </View>
      <TouchableOpacity>
        <View >
          <Text style={styles.text}>
            {item.name}
          </Text>
          <Text style={styles.messege}>
            {item.messege}
          </Text>
          <Text style={styles.time}>
            {item.time}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111111' }}>
      <View>
        <Image
          source={require('../assets/images/Logo2.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/Chat.png')}
          style={styles.loneliness}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/SearchIcon.png')}
            style={styles.drawer}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../assets/images/NowActiveText.png')}
          style={styles.nowActive}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.toString() + index}
        />
      </View>
    </SafeAreaView>
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
    height: hp(4),
    width: wp(30),
    resizeMode: 'center',
    alignSelf: 'center',
    bottom:hp(4)
  },
  drawer:
  {
    height: hp(8),
    width: wp(8),
    resizeMode: 'center',
    bottom:hp(9.5),
    left: wp(86)
  },
  nowActive: {
    width: hp(12),
    height: wp(15),
    resizeMode: 'contain',
    bottom:hp(13),
    left: wp(5)
  },
  profileImg: {
    height: hp(8),
    width: wp(15),
    resizeMode: "contain",
    borderRadius: 50,
    borderColor: "yellow",
    borderWidth: hp(0.3),
    marginBottom: hp(2),
    left: wp(5),
  },
  text: {
    left: wp(10),
    top: hp(18),
    fontWeight: 'bold',
    color: "#FFFFFF"
  },
  messege: {
    color: '#C3C3C3',
    top: hp(19),
    left: wp(10)
  },
  time: {
    fontSize: 11,
    color: "#C3C3C3E5",
    left: wp(67),
    top: hp(13),
  },
  status: {
    height: hp(1.3),
    width: wp(2),
    resizeMode: "cover",
    borderRadius: 50,
    top: hp(14),
    left: wp(18)
  }
})
export default Chat
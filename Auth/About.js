import { View, Text, StyleSheet, TouchableOpacity, Image,Alert } from 'react-native'
import React,{useState} from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
const About = ({ navigation }) => {
  const [desc, setDesc] = useState('')
  const handleContinue = () => {
    if (typeof desc === 'string' && desc.trim().length === 0) {
        Alert.alert('Please enter your full name');
    } else {
        navigation.navigate('DateofBirth');
    }
};
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate("ProfilePhoto")}>
        <Image
          source={require('../assets/images/Back.png')}
          style={styles.backArrow}
        />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/LoaderAcc4.png')}
        style={styles.loader}
      />
      <View>
        <Text style={styles.mainText}>Tell Us About Yourself</Text>
        <Text style={styles.desc}>Tell us about yourself so others can get to{'\n'}know you.</Text>
      </View>
      <CustomInput
        custoMStyle={styles.input}
        multiline={true}
        onChangeText={(text)=>setDesc(text)}
      />
      <View style={styles.Bar} />
      <CustomButton
        title='Continue'
        style={[desc ? styles.buttonActive : styles.buttonDisabled]}
        disabled={!desc} // Disable button if input is empty
        onPress={handleContinue} // Use the handleContinue function
      />
    </View>
  )
}
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
  mainText: {
    fontWeight: "bold",
    fontSize: 23,
    left:wp(6.5),
    top: hp(10),
    color: "#FFFFFF"
  },
  desc: {
    alignSelf: "center",
    top: hp(10),
    color: '#FFFFFF'
  },
  input: {
    height: hp(30),
    top: hp(10),
  },
  Bar: {
    height: "0.5%",
    width: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.19)',
    top: "35%",
},
buttonDisabled: {
  backgroundColor: 'gray',
  top: '37%'
},
buttonActive: {
  backgroundColor: 'yellow',
  top: '37%'
},
})
export default About
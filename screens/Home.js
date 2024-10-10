// import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
// import React ,{useEffect}from 'react'
// import LottieView from 'lottie-react-native';
// import LinearGradient from 'react-native-linear-gradient'
// import { useFocusEffect } from '@react-navigation/native';
// const Home = ({navigation}) => {
  
//   useFocusEffect(()=>{
//     setTimeout(()=>{
//         navigation.navigate('Home2')
//     },2000)
//   })
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#111111' }}>
    //   <LinearGradient 
    //   colors={[ '#111111', '#111111', '#363213', '#6E6417']}
    //   style={styles.LinearGradient}
    //   >
    //   <View>
    //     <Image
    //       source={require('../assets/images/Logo2.png')}
    //       style={styles.logo}
    //     />
    //   </View>
    //   <View>
    //     <Image
    //       source={require('../assets/images/LonelinessText.png')}
    //       style={styles.loneliness}
    //     />
    //   </View>
    //   <View>
    //     <TouchableOpacity>
    //       <Image
    //         source={require('../assets/images/Notification.png')}
    //         style={styles.bellicon}
    //       />
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     <TouchableOpacity >
    //       <Image
    //         source={require('../assets/images/DrawerIcon.png')}
    //         style={styles.drawer}
    //       />
    //     </TouchableOpacity>
    //   </View>
    //   <View style={{ alignItems: 'center', justifyContent: "center" }}>

    //     <LottieView style={{ height: 400, width: 450 }} source={require('../assets/animations/Circle.json')} autoPlay loop />
    //     <Image 
    //     source={{uri:"https://feji.us/lqbc74"}}
    //     style={{height:70,width:70,position:"absolute",borderColor:'yellow',borderRadius:50,borderWidth:2}}
    //     />
    // </View>
    //   <View>
    //     <Image
    //       source={require('../assets/images/FindingPeopleText.png')}
    //       style={styles.text}
    //     />
    //   </View>
    //   </LinearGradient>
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   logo: {
//     height: 40,
//     width: 34,
//     resizeMode: "contain",
//     top: 30,
//     left: 20
//   },
//   loneliness: {
//     height: 41,
//     width: 132,
//     resizeMode: 'contain',
//     bottom: 12,
//     left: 115
//   },
//   bellicon: {
//     height: 27,
//     width: 27,
//     resizeMode: 'contain',
//     bottom: 45,
//     left: 280
//   },
//   drawer:
//   {
//     height: 27,
//     width: 27,
//     resizeMode: 'contain',
//     bottom: 73,
//     left: 320
//   },
//   personFinder: {
//     height: 334,
//     width: 335,
//     resizeMode: 'contain',
//     left: 13
//   },
//   text: {
//     height: 36,
//     width: 256,
//     resizeMode: 'contain',
//     left: 50,
//     top: 10
//   },
//   LinearGradient:{
//     height:"100%",
//     width:'100%',
    
//   }
  
// })
// export default Home
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#111111' }}>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/Back.png')}
            style={styles.BackArrow}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../assets/images/WelcomeText.png')}
          style={styles.welcome}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/underWelcomeText.png')}
          style={styles.underwelcome}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/EmailBar.png')}
            style={styles.emailBar}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/Password.png')}
            style={styles.Password}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/forgetPassword.png')}
            style={styles.forgetPassword}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../assets/images/Bar.png')}
          style={styles.Bar}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/SignUp.png')}
            style={styles.SignUp}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/Login.png')}
            style={styles.Login}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  BackArrow: {
    height: 41,
    width: 41,
    top: 40,
    left: 20
  },
  welcome: {
    height: 30,
    width: 300,
    resizeMode: "contain",
    top: 70
  },
  underwelcome: {
    height: 14,
    width: 280,
    resizeMode: "contain",
    top: 80,
    left: 30
  },
  emailBar: {
    height: 87,
    width: 310,
    resizeMode: 'contain',
    top: 100,
    left: 30

  },
  Password: {
    height: 87,
    width: 310,
    resizeMode: 'contain',
    top: 110,
    left: 30
  },
  forgetPassword: {
    height: 20,
    width: 310,
    resizeMode: "contain",
    top: 120,
    left: 30
  },
  Bar: {
    height: 2,
    width: 388,
    top: 150
  },
  SignUp: {
    height: 12,
    width: 250,
    top: 200,
    left:50
  },
  Login:{
    height:60,
    width:370,
    resizeMode:'contain',
    top:260
  }
})
export default App
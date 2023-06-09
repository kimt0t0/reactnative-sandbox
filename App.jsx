import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={backgroundStyle}
        >
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white
            }}
          >
            <Text style={{ color: 'black' }}>COUCOU</Text>
          </View>
        </ScrollView>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core' 

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text> 
    </View>
  )
} 

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


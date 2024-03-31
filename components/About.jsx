import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
function About({data}) {
  return (
    <View style={style.container1}>
    <Text>Whats asup {data}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container1:{
    flex:1,
    backgroundColor:'yellow',
  }
})
export default About
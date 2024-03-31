import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import HomePage from './HomePage'
export default function About({data}) {
  
  const goToHome = () => {
    console.log('Navigating to Home')
    navigate.navigate('Home')
  }

  const navigate = useNavigation()
  return (
    <View style={style.container1}>
    <Text style={style.box1}>Whats asup {data}</Text>
    <Button style={style.box1} title='home' onPress={goToHome}/>
    </View>
  )
}

const style = StyleSheet.create({
  container1:{
    height:"100%",
    width:"100%",
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center'
  },
  box1:{
    color:'red'
  }
})
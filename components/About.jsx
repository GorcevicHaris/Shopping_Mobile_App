import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export default function About({data}) {

  const navigation = useNavigation()
  return (
    <View style={style.container1}>
    <Text style={style.box1}>Whatsasdsad asup {data}</Text>
    <Button  title='go to Home' onPress={()=> navigation.navigate("Home")}/>
    </View>
  )
}

const style = StyleSheet.create({
  container1:{
    height:"100%",
    width:"100%",
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
  },
  box1:{
    color:'red'
  }
})
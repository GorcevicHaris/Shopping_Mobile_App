import React, { useState } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import About from './About'

function HomePage() {
  
    const [array,setArray] =  useState(['haris','hamza','erhad'])
  return (
    <View>
        <View style={styles.container1}>
            {array.map(data=> <About data={data}/>)}
        </View>
        <View style={{height:100,width:100,backgroundColor:'yellow'}}>
          
        </View>
    </View>
  )
}
export default HomePage
const styles = StyleSheet.create({
  container1:{
    height:100,
    width:100,
    color:'red',
    backgroundColor:'blue'
  }
})
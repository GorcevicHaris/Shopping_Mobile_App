  import React, { useState } from 'react'
  import { Text, View ,StyleSheet, Button, Modal} from 'react-native'
  import About from './About'
  import { useNavigation } from '@react-navigation/native'

  function HomePage() {
      const navigate = useNavigation()
      const [modalVisible,setModalVisible] = useState(false)
      const [array,setArray] =  useState(['haris','hamza','erhad'])
    return (
      <View>
          <View style={styles.container1}>
          <Button title='About' onPress={() => setModalVisible(true)} />
          </View>
          <Modal
                animationType="slide" // Slide animation
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <About />
                    <Button  title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
      </View>
    )
  }
  export default HomePage
  const styles = StyleSheet.create({
    container1: {
        height:'100%',
        width:'100%',
        color: 'red',
        backgroundColor: 'blue',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
});
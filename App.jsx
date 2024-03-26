import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Button,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native";
import Greet from "./components/Greet";
import logo from "./assets/adaptive-icon.png";
export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'black',padding:20}}>
      <ScrollView >
        <Image  source={logo} style={{height:200,width:200}}/>
        <View style={style.container2}></View>
        <View style={style.container3}></View>
        <View style={style.container2}></View>
        <View style={style.container3}></View>
        <View style={style.container2}></View>
        <View style={style.container3}></View>
        <View style={style.container2}></View>
        <View style={style.container3}></View>
        <View style={{ flex: 1 }} />
      </ScrollView>
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 60,
  },
  container2: {
    backgroundColor: "green",
    padding: 60,
    marginBottom: 20,
    marginTop:20,
    borderWidth:2,
    borderColor:'red',
    borderStyle:"solid",
    borderRadius:10,

  },
  container3: {
    backgroundColor: "blue",
    padding: 60,
    marginBottom: 20, // Dodajte razmak između komponenti ako je potrebno
  },
});

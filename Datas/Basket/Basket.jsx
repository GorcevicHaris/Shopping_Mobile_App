import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { CustomContext } from "../../Context/ContextProvider";
import Data from "../../components/Data";
import BasketData from "../../components/BasketData";

function Basket() {
  const { sendDataFunction } = useContext(CustomContext);
  return (
    <View style={styles.container1}>
      <View style={{ flexDirection: "column", gap: 30 }}>
        <FlatList
          numColumns={windowWidth > 700 ? 2 : 1}
          data={sendDataFunction}
          renderItem={({ item }) => <BasketData key={item.id} data={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 50 }}></View>}
        />
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;

export default Basket;
const orange = "#E94B3CFF";
const siva = "#2D2926FF";

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f3f3",
  },
});

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
          ItemSeparatorComponent={() => (
            <View key={""} style={{ height: 50 }}></View>
          )}
          ListFooterComponent={
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white" }}>Buy and check Bill</Text>
              </TouchableOpacity>
              <View style={{ width: 200, height: 400, backgroundColor: "red" }}>
                {sendDataFunction.map((el) => (
                  <Text>{el.price * 2}</Text>
                ))}
              </View>
            </View>
          }
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
  button: {
    backgroundColor: orange,
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

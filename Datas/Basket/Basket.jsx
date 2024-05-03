import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { CustomContext } from "../../Context/ContextProvider";
import BasketData from "../../components/BasketData";

export default function Basket() {
  const { sendDataFunction, setTotalPrice, totalPrice, setSendDataFunction } =
    useContext(CustomContext);
  const [showBill, setShowBill] = useState(false);
  useEffect(() => {
    setTotalPrice(sendDataFunction.reduce((acc, curr) => acc + curr.price, 0));
  }, []);

  const renderFooter = () => (
    <View>
      <TouchableOpacity onPress={() => setShowBill(true)} style={styles.button}>
        <Text style={{ color: "white" }}>Check Bill</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={windowWidth > 700 ? 2 : 1}
        data={sendDataFunction}
        renderItem={({ item }) => (
          <BasketData
            setFakeQuantity={(quantity) =>
              setSendDataFunction(
                sendDataFunction.map((data) =>
                  data.id === item.id
                    ? { ...data, fakeQuantity: quantity }
                    : data
                )
              )
            }
            key={item.id}
            data={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={renderFooter(sendDataFunction, totalPrice)}
      />
      {showBill && (
        <View style={styles.totalContainer}>
          {sendDataFunction.map((el) => (
            <View key={el.id}>
              <Text>{el.price}</Text>
              <Text>{el.fakeQuantity}</Text>
              <Text>Name:{el.name}</Text>
            </View>
          ))}
          <Text>Total Price: {totalPrice}$</Text>
          <TouchableOpacity
            onPress={() => setShowBill(false)}
            style={styles.pay}
          >
            <Text>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowBill(false)}
            style={styles.exit}
          >
            <Text>Exit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const orange = "#E94B3CFF";
const siva = "#2D2926FF";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f3f3",
  },
  button: {
    backgroundColor: "#E94B3CFF",
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  totalContainer: {
    width: 250,
    minHeight: 400,
    position: "absolute",
    top: 150,
    left: 100,
    backgroundColor: orange,
    borderRadius: 20,
    padding: 20,
  },
  separator: {
    height: 50,
  },
  exit: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "pink",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pay: {
    position: "absolute",
    left: 10,
    bottom: 10,
    backgroundColor: "pink",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

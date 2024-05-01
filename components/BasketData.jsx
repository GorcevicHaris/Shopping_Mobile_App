import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function BasketData({ data }) {
  const [quantity, setQuantity] = useState(0);

  function onIncrement() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  }
  function onDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageURL }} />
      <View style={styles.buyinfo}>
        <TouchableOpacity onPress={onDecrement} style={styles.button2}>
          <Text
            style={{
              color: "white",
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity onPress={onIncrement} style={styles.button}>
          <Text
            style={{
              color: "white",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <Text>{data.price}$</Text>
      </View>
    </View>
  );
}

const orange = "#E94B3CFF";
const siva = "#2D2926FF";

const styles = StyleSheet.create({
  container: {
    minHeight: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 15,
    gap: 20,
    padding: 20,
    borderBottomWidth: 10,
    borderBottomColor: siva,
    borderRightWidth: 10,
    borderRightColor: siva,
    flexDirection: "column",
  },
  image: {
    objectFit: "contain",
    borderRadius: 25,
    height: 450,
    width: 350,
    objectFit: "cover",
    alignSelf: "center",
  },
  buyinfo: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: orange,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: siva,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  miniContainer: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
});

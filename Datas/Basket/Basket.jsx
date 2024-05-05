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
  const [showAlert, setShowAlert] = useState(false);
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

  const handlePay = () => {
    setShowBill(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  return (
    <View style={styles.container}>
      {showAlert && (
        <View style={styles.alert}>
          <Text
            style={styles.closebtn}
            class="closebtn"
            onclick="this.parentElement.style.display='none';"
          >
            Completed Paying Up
          </Text>
        </View>
      )}
      <FlatList
        numColumns={windowWidth > 700 ? 2 : 1}
        data={sendDataFunction}
        renderItem={({ item }) => (
          <BasketData
            removeProduct={(dataItem) =>
              setSendDataFunction((prev) =>
                prev.filter((item) => item.id !== dataItem)
              )
            }
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
          {sendDataFunction?.map((el) => (
            <View key={el.id}>
              <Text style={{ color: "white" }}>
                Quantity:&nbsp;
                {el.price}$ &nbsp;&nbsp;&nbsp;&nbsp;
                {el.fakeQuantity}x
              </Text>
            </View>
          ))}
          <Text style={{ color: "white" }}>
            Total Price: {totalPrice.toFixed(2)}$
          </Text>
          <TouchableOpacity onPress={handlePay} style={styles.pay}>
            <Text
              style={{
                color: siva,
              }}
            >
              Pay
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowBill(false);
            }}
            style={styles.exit}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Exit
            </Text>
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
    width: 300,
    minHeight: 500,
    position: "absolute",
    top: 130,
    left: 75,
    backgroundColor: siva,
    borderRadius: 20,
    padding: 20,
  },
  separator: {
    height: 50,
  },
  exit: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "red",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  pay: {
    position: "absolute",
    left: 10,
    bottom: 10,
    backgroundColor: "lightgreen",
    width: 70,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  alert: {
    padding: 20,
    backgroundColor: "lightgreen",
    color: "white",
    position: "absolute",
    top: 20,
    left: 65,
    width: 300,
    zIndex: 10,
  },
  closebtn: {
    marginleft: 15,
    color: "white",
    fontSize: 22,
    lineHeight: 20,
    alignSelf: "center",
  },
});

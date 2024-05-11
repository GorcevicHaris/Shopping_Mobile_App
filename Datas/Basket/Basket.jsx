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
import axios from "axios";
export default function Basket() {
  const { sendDataFunction, setTotalPrice, totalPrice, setSendDataFunction } =
    useContext(CustomContext);
  const [showBill, setShowBill] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [orders, setOrders] = useState([]);
  const [tokenValues, setTokenValue] = useState("");

  const token = async () => {
    return await AsyncStorage.getItem("userToken");
  };
  useEffect(() => {
    const fetchToken = async () => {
      const token = await token();
      setTokenValue(token);
      console.log(tokenValues, "cokse");
    };
    fetchToken();
  }, [token]);
  console.log(tokenValues, "valuetoken");
  useEffect(() => {
    axios
      .get("http://192.168.0.103:4005/api/fetchOrders", {
        headers: { Authorization: `Bearer ${tokenValues}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [tokenValues]);
  // useEffect(() => {
  //   setTotalPrice(sendDataFunction.reduce((acc, curr) => acc + curr.price, 0));
  // }, [totalPrice, sendDataFunction]);

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
        data={orders.length > 0 && orders}
        renderItem={({ item }) => (
          <BasketData
            removeProduct={(dataItem) =>
              setSendDataFunction((prev) => {
                return prev.filter((item) => item.id !== dataItem);
              })
            }
            setFakeQuantity={(quantity) =>
              setSendDataFunction(
                orders.map((data) =>
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
        ListFooterComponent={renderFooter(orders, totalPrice)}
      />
      {showBill && (
        <View style={styles.totalContainer}>
          {orders?.map((el) => {
            return (
              <View key={el.id}>
                <Text style={{ color: "white" }}>
                  {el.fakeQuantity === undefined ? 1 : el.fakeQuantity} x&nbsp;
                  {el.price}$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {isNaN(el.price * el.fakeQuantity)
                    ? el.price
                    : el.price * el.fakeQuantity}
                  $
                </Text>
              </View>
            );
          })}
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
    alignSelf: "center",
    backgroundColor: siva,
    borderRadius: 20,
    padding: 20,
    position: "absolute",
    top: 100,
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
    width: 300,
    zIndex: 10,
    alignSelf: "center",
  },
  closebtn: {
    color: "white",
    fontSize: 22,
    lineHeight: 20,
    alignSelf: "center",
    marginLeft: 10,
  },
});

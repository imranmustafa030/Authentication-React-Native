import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const PaymentScreen = ({ setIsAuthenticated }) => {
  return (
    <SafeAreaView style={styles.upper}>
      <Image
        source={require("../../assets/background.jpg")}
        style={styles.background}
      />
      <Text style={styles.title}>Payment</Text>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.profileImage}
            source={require("../../assets/profile2.png")}
          />
          <Text
            style={{
              color: "grey",
              fontWeight: "bold",
              marginTop: 15,
              alignSelf: "center",
            }}
          >
            PAYING
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 5 }}>
            Imran Mustafa, Jr.
          </Text>
        </View>
        <Text style={{ fontSize: 55, fontWeight: "500", marginBottom: 10 }}>
          $500.00
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Add a note"
          placeholderTextColor="grey"
        />
        <Image
          source={require("../../assets/card1.png")}
          style={styles.card}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={() => setIsAuthenticated(false)}
          style={styles.btn}
        >
          <Text style={styles.text}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  upper: {
    backgroundColor: "white",
  },
  container: {
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#00000010",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: "center",
  },
  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#4478DA",
    padding: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignself: "flex-start",
    paddingLeft: 15,
    paddingVertical: 15,
    marginTop: -10,
  },
  card: {
    justifyContent: "flex-start",
    width: "90%",
    margin: -200,
  },
  background: {
    position: "absolute",
    opacity: 0.1,
    width: "100%",
  },
});

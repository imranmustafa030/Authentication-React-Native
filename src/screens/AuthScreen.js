import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const myImage = require("../../assets/Front2.jpg");

export default function Auth({ onAuthenticate }) {
  return (
    <View style={styles.container}>
      <Image source={myImage} style={styles.image} />
      <Text style={styles.title}>EXPENIO</Text>
      <Text style={styles.description}>
        Going cashless has never been this esier with the world's most leading
        expense manager
      </Text>
      <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: "white",
  },
  btn: {
    width: 200,
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
  image: {
    width: 400,
    height: 400,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#628FE0",
  },
  description: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
});

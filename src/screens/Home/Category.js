import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "../../constant/color";

const Category = () => {
  return (
    <View style={{ marginTop: 25 }}>
      <Text
        style={{
          ...styles.title,
        }}
      >
        Medical Specialist
      </Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",

          gap: 25,
          marginTop: 18,
        }}
      >
        <Button image={require("../../asset/category/1.png")} />
        <Button image={require("../../asset/category/2.png")} />
        <Button image={require("../../asset/category/3.png")} />
        <Button image={require("../../asset/category/4.png")} />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",

          gap: 25,
          marginTop: 18,
        }}
      >
        <Button image={require("../../asset/category/5.png")} />
        <Button image={require("../../asset/category/6.png")} />
        <Button image={require("../../asset/category/7.png")} />
        <Button2 />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  title: {
    color: color.primaryColor,
    fontSize: 20,
    fontWeight: "700",
  },
});

const Button = ({ image }) => {
  return (
    <TouchableOpacity
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { height: 0.2, width: 0.2 },
        elevation: 1,
        padding: 12,
        borderRadius: 20,
        backgroundColor: color.white,
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={image}
        style={{
          width: 35,
          height: 35,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};
const Button2 = () => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        backgroundColor: color.secondaryColor,
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: color.white, fontSize: 14 }}> See all</Text>
    </TouchableOpacity>
  );
};

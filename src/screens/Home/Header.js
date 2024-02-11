import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import color from "../../constant/color";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={require("../../asset/icon/menu.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }}
      >
        <MaterialIcons
          name="location-on"
          size={24}
          color={color.primaryColor}
        />
        <Text
          style={{
            color: color.black,
            fontSize: 14,
          }}
        >
          Bahia Blanca
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

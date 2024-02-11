import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Home from "./Home/Home";
import { Foundation } from "@expo/vector-icons";
import color from "../constant/color";

const TabView = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={color.white} />
      {activeTab === "Home" && <Home />}

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => handleTabChange("Home")}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 8,
                backgroundColor: color.primaryLight,
                paddingVertical: 9,
                paddingHorizontal: 14,
                borderRadius: 30,
              }}
            >
              <View>
                <Foundation name="home" size={24} color={color.primaryColor} />
              </View>
              <Text style={{ fontSize: 12, color: color.primaryColor }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange("Home")}>
            <Image
              source={require("../asset/icon/calendar.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange("Home")}>
            <Image
              source={require("../asset/icon/message.png")}
              style={{ width: 25, height: 25 }}
            />
            <View
              style={{
                position: "absolute",
                top: -5,
                right: -5,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  alignContent: "center",
                  backgroundColor: color.secondaryColor,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: color.white,
                    textAlign: "center",
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange("Home")}>
            <Image
              source={require("../asset/icon/notification.png")}
              style={{ width: 25, height: 25 }}
            />
            <View
              style={{
                position: "absolute",
                top: 1,
                right: 5,
              }}
            >
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 10,
                  alignContent: "center",
                  backgroundColor: color.primaryColor,
                }}
              ></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange("Home")}>
            <Image
              source={require("../asset/icon/user.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TabView;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 4,
    height: Platform.OS === "ios" ? 80 : 70,
    backgroundColor: "#fff",

    paddingBottom: Platform.OS === "ios" ? 17 : 5,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 1,
  },
});

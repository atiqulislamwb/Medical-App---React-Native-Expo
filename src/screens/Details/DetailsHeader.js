import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import color from "../../constant/color";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailsHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 60 : 20,
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderRadius: 15,
            borderWidth: 1,
            borderColor: color.white,
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="arrow-back" size={15} color={color.white} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            borderWidth: 1,
            borderColor: color.white,
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="sharealt" size={15} color={color.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import color from "../../constant/color";

const DetailsProfile = ({ doctor }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        gap: 20,
        flexDirection: "row",
        marginTop: 30,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <Image
          source={{ uri: doctor?.profilePhoto }}
          style={{ width: 80, height: 80, borderRadius: 20 }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: color.white,
            textAlign: "center",
            marginTop: 8,
          }}
        >
          4.5 <AntDesign name="star" size={15} color={color.white} />{" "}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: color.white,
          }}
        >
          {doctor?.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#B1A3D2",
            marginTop: 4,
          }}
        >
          {doctor?.position}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: color.white,
            marginTop: 4,
          }}
        >
          {"15 + years of experience"}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: color.white,
            marginTop: 4,
            textDecorationLine: "underline",
          }}
        >
          4489+{" "}
          <Text
            style={{
              fontWeight: "400",
              letterSpacing: 0.5,
            }}
          >
            {" "}
            Patients stories
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default DetailsProfile;

const styles = StyleSheet.create({});

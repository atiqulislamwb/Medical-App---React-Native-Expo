import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../../constant/color";
import DetailsDate from "./DetailsDate";
import DetailsTime from "./DetailsTime";

const DetailsContent = () => {
  return (
    <View>
      <Text
        style={{
          ...styles.title,
        }}
      >
        About Doctor
      </Text>
      <View style={{ marginTop: 18 }}>
        <Text
          style={{
            color: "gray",
            fontSize: 16,
            lineHeight: 24,
            fontWeight: "400",
          }}
        >
          Jane practises nephrology in fitchburg, Wiscosin. Cooper has been
          practising medicine for over ...{" "}
          <Text
            style={{
              color: color.secondaryColor,
              fontWeight: "700",
            }}
          >
            Read More
          </Text>
        </Text>
      </View>
      <View style={{ marginTop: 25 }}>
        <DetailsDate />
      </View>
      <View style={{ marginTop: 25 }}>
        <DetailsTime />
      </View>
    </View>
  );
};

export default DetailsContent;

const styles = StyleSheet.create({
  title: {
    color: color.primaryColor,
    fontSize: 20,
    fontWeight: "700",
  },
});

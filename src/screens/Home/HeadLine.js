import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "../../constant/color";

const HeadLine = () => {
  return (
    <View
      style={{
        marginTop: 25,
        backgroundColor: color.primaryColor,
        padding: 20,
        borderRadius: 30,
      }}
    >
      <Text style={styles.title}>Book appointment with</Text>
      <Text style={styles.title}>expert surgeon</Text>

      <View style={{ flexDirection: "row", marginTop: 12 }}>
        <Image
          source={{
            uri: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
          }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: color.white,
          }}
        />

        <DoctorImage uri="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" />

        <DoctorImage uri="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" />

        <DoctorImage uri="https://www.shutterstock.com/image-photo/young-asian-female-doctor-standing-600nw-2138546201.jpg" />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 5,
            paddingHorizontal: 12,
            backgroundColor: "#6D55B2",
            borderRadius: 20,
          }}
        >
          <Text style={{ ...styles.title, fontSize: 14 }}>+454 Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 14,
            backgroundColor: color.white,
            borderRadius: 15,
          }}
        >
          <Text
            style={{ ...styles.title, fontSize: 14, color: color.primaryColor }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeadLine;

const styles = StyleSheet.create({
  title: {
    color: color.white,
    fontSize: 18,
    fontWeight: "700",
  },
});

const DoctorImage = ({ uri }) => {
  return (
    <Image
      source={{
        uri,
      }}
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: color.white,
        marginLeft: -10,
      }}
    />
  );
};

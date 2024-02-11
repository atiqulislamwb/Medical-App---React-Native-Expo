import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import color from "../../constant/color";
import { Feather } from "@expo/vector-icons";

const DetailsDate = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const days = [
    { day: "Sun", date: 6 },
    { day: "Mon", date: 7 },
    { day: "Tue", date: 8 },
    { day: "Wed", date: 9 },
    { day: "Thu", date: 10 },
    { day: "Fri", date: 11 },
    { day: "Sat", date: 12 },
  ];

  const handlePress = (day) => {
    setSelectedDay(day);
  };
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={styles.title}>Select Date</Text>
        <TouchableOpacity
          style={{
            gap: 14,
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Text
            style={{
              ...styles.title,
              color: "gray",
            }}
          >
            April 2024
          </Text>
          <Feather name="edit-3" size={22} color="gray" />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.container}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {days.map((item, index) => (
              <WeekButton
                key={item?.day}
                day={item?.day}
                date={item?.date}
                isSelected={selectedDay === item?.day}
                onPress={() => handlePress(item?.day)}
                index={index}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailsDate;

const styles = StyleSheet.create({
  title: {
    color: color.primaryColor,
    fontSize: 20,
    fontWeight: "700",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    paddingVertical: 13,
    paddingHorizontal: 14,
    borderRadius: 25,
    backgroundColor: "#F8F8F8",
  },
  selectedButton: {
    borderColor: "blue",
  },
  buttonText: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
    fontSize: 16,
  },
});

const WeekButton = ({ day, date, onPress, isSelected, index }) => (
  <TouchableOpacity
    style={[
      styles.button,
      isSelected && styles.selectedButton,
      {
        marginLeft: index == 0 ? 0 : 15,
        borderWidth: isSelected ? 1 : 0,
        borderColor: isSelected ? color.primaryColor : null,
      },
    ]}
    onPress={onPress}
  >
    <Text
      style={{
        ...styles.buttonText,
        color: isSelected ? color.primaryColor : "gray",
        fontWeight: isSelected ? "bold" : "400",
      }}
    >
      {day}
    </Text>
    <Text
      style={{
        ...styles.buttonText,
        color: isSelected ? color.primaryColor : "gray",
        fontWeight: isSelected ? "bold" : "400",
      }}
    >
      {date}
    </Text>
  </TouchableOpacity>
);

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import color from "../../constant/color";

const DetailsTime = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const times = Array.from({ length: 6 }, (_, i) => ({
    label: `${i === 0 ? "12:00" : `${i}:00`} ${i < 2 ? "am" : "pm"}`,
    value: `${i}:00`,
  }));

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };
  return (
    <View>
      <Text style={styles.title}>Select Time</Text>
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {times.map(({ label, value }, index) => (
            <WeekButton
              key={label}
              label={label}
              index={index}
              isSelected={selectedTime === value}
              onPress={() => handleTimePress(value)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsTime;

const styles = StyleSheet.create({
  title: {
    color: color.primaryColor,
    fontSize: 20,
    fontWeight: "700",
  },
  container: {
    marginTop: 20,
  },
  dayButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  timeButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#F8F8F8",
  },

  buttonText: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
    fontSize: 16,
  },
});

const WeekButton = ({ label, onPress, isSelected, index }) => (
  <TouchableOpacity
    style={[
      styles.button,

      {
        marginLeft: index === 0 ? 0 : 15,
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
      {label}
    </Text>
  </TouchableOpacity>
);

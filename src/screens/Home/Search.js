import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // or any other icon library
import color from "../../constant/color";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchIconContainer}>
        <AntDesign name="search1" size={24} color={color.primaryColor} />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder="Search Doctor ..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 15,
    paddingHorizontal: 10,

    marginTop: 20,
    borderWidth: 1,
    borderColor: color.primaryLighter,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    height: 42,
  },
});

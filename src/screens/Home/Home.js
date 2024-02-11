import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Search from "./Search";
import HeadLine from "./HeadLine";
import Category from "./Category";
import Doctor from "./Doctor";

const Home = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
        paddingTop: 10,
        marginTop: Platform.OS === "ios" ? 0 : 30,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Search />
      <HeadLine />
      <Category />
      <Doctor />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});

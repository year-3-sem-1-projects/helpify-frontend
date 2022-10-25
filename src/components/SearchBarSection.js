import { Image, StyleSheet, TouchableNativeFeedback, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import commonStyles from "../styles/common";

const SearchBarSection = ({
  setShowClose,
  setSearchQuery,
  searchQuery,
  showClose,
  setShowFilterOptions,
  showFilterOptions,
  placeHolder,
}) => {
  return (
    <View style={commonStyles.section}>
      {/* search bar */}
      <TextInput
        style={commonStyles.search_bar}
        placeholder={placeHolder}
        placeholderTextColor="#bcbcbc"
        underlineColor="#bcbcbc"
        activeUnderlineColor="#bcbcbc"
        value={searchQuery}
        onChangeText={(query) => {
          if (query.length === 0) {
            setShowClose(false);
          }
          if (query.length === 1) {
            setShowClose(true);
          }
          setSearchQuery(query);
        }}
      />
      {/* reset field button */}
      {showClose ? (
        <Ionicons
          style={commonStyles.closeIcon}
          name="close"
          size={24}
          color="#bcbcbc"
          onPress={() => {
            setSearchQuery("");
            setShowClose(false);
          }}
        />
      ) : null}
      {/* Divider */}
      <View style={commonStyles.divider}></View>
      {/* filter */}
      <TouchableNativeFeedback
        onPress={() => {
          setShowFilterOptions(!showFilterOptions);
        }}
      >
        <Image
          style={commonStyles.filter_icon}
          source={require("../assets/filter.png")}
        />
      </TouchableNativeFeedback>
    </View>
  );
};

export default SearchBarSection;

const styles = StyleSheet.create({});

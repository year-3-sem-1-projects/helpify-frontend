import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import SearchBarSection from "../components/SearchBarSection";
import FilterSection from "../components/FilterSection";
import commonStyles from "../styles/common";
import { StatusBar } from "expo-status-bar";

const SEARCH_BAR_PLACEHOLDER_HOME_SCREEN = "Search for odd jobs";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showClose, setShowClose] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={commonStyles.container}>
        <StatusBar style="auto" />
        <SearchBarSection
          setShowClose={setShowClose}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          showClose={showClose}
          setShowFilterOptions={setShowFilterOptions}
          showFilterOptions={showFilterOptions}
          placeHolder={SEARCH_BAR_PLACEHOLDER_HOME_SCREEN}
        />
        <FilterSection showFilterOptions={showFilterOptions} />
        <View style={commonStyles.section}>{/* Code here */}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

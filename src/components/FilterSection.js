import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chip } from "react-native-paper";
import commonStyles from "../styles/common";

const FilterSection = ({ showFilterOptions }) => {
  return (
    <View style={commonStyles.section}>
      {showFilterOptions ? (
        <View style={commonStyles.filter_options}>
          <Chip
            style={commonStyles.chip}
            onClose={() => {
              console.log("close");
            }}
            onPress={() => console.log("Pressed")}
          >
            Driver
          </Chip>
          <Chip
            style={commonStyles.chip}
            onClose={() => {
              console.log("close");
            }}
            onPress={() => console.log("Pressed")}
          >
            Plumber
          </Chip>
          <Chip
            style={commonStyles.chip}
            onClose={() => {
              console.log("close");
            }}
            onPress={() => console.log("Pressed")}
          >
            Dog walker
          </Chip>
          <Chip
            style={commonStyles.chip}
            onClose={() => {
              console.log("close");
            }}
            onPress={() => console.log("Pressed")}
          >
            Pool cleaner
          </Chip>
        </View>
      ) : null}
    </View>
  );
};

export default FilterSection;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../styles/common";

function ProfileScreen() {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.section}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({});

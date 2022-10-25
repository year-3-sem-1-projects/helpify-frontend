import { StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../styles/common";

const Helpify = () => {
  return (
    <View style={commonStyles.view}>
      <Text style={commonStyles.app_name_size}>Helpi</Text>
      <Text style={[commonStyles.accent_color, commonStyles.app_name_size]}>
        f
      </Text>
      <Text style={commonStyles.app_name_size}>y</Text>
    </View>
  );
};

export default Helpify;

const styles = StyleSheet.create({});

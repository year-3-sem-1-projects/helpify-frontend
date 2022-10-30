import React, { useState } from "react";
import Stepper from "react-native-stepper-ui";
import { StyleSheet, Text, View, Alert, ScrollView } from "react-native";
import {
  PersonalDetails,
  JobDetails,
  SalaryDetails,
} from "../components/JobCreate";

const content = [<PersonalDetails />, <JobDetails />, <SalaryDetails />];

const AddOddJobsScreen = () => {
  const [active, setActive] = useState(0);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginVertical: 80, marginHorizontal: 20, marginTop: 10 }}>
        <Stepper
          active={active}
          content={content}
          onNext={() => setActive((p) => p + 1)}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => Alert.alert("Create odd job sussecfully")}
        />
      </View>
    </ScrollView>
  );
};

export default AddOddJobsScreen;

const styles = StyleSheet.create({});

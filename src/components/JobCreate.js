import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";

export const PersonalDetails = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "normal",
          alignSelf: "center",
        }}
      >
        Enter Your Personal Details
      </Text>

      <Text
        style={{
          fontWeight: "normal",
          marginHorizontal: 55,
          textAlign: "center",
          marginTop: 5,
          opacity: 0.4,
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Text>

      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Name
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="Arya Stark"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Address
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="No.123, Jalan ABC, 12345, Kuala Lumpur"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Mobile Number
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="+94 "
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Email
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="abc@gmail.com"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

export const JobDetails = () => {
  const [inputs, setInputs] = useState([{ key: "", value: "" }]);

  const addHandler = () => {
    const _inputs = [...inputs];
    _inputs.push({ key: "", value: "" });
    setInputs(_inputs);
  };

  const deleteHandler = (key) => {
    const _inputs = inputs.filter((input, index) => index != key);
    setInputs(_inputs);
  };

  const inputHandler = (text, key) => {
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key = key;
    setInputs(_inputs);
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "normal",
          alignSelf: "center",
        }}
      >
        Enter Odd Job Details
      </Text>

      <Text
        style={{
          // fontFamily: "SemiBold",
          fontWeight: "normal",
          marginHorizontal: 55,
          textAlign: "center",
          marginTop: 5,
          opacity: 0.4,
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Text>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>Job</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="Cleaner"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Job Type
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="Full Time or Part Time"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Job Location
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="Colombo"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Job Requirements
      </Text>

      <ScrollView>
        {inputs.map((input, key) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 55,
              borderWidth: 2,
              marginTop: 15,
              paddingHorizontal: 10,
              borderColor: "#00a8b7",
              borderRadius: 23,
              paddingVertical: 4,
              marginBottom: 10,
              width: "80%",
            }}
          >
            <TextInput
              placeholder="Job Requirements"
              placeholderTextColor="#00716F"
              style={{ paddingHorizontal: 10 }}
              value={input.value}
              onChangeText={(text) => inputHandler(text, key)}
            />
            <TouchableOpacity onPress={() => deleteHandler(key)}>
              <Text style={{ color: "red", fontSize: 13 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => addHandler()}>
        <Text style={{ color: "#00716F", fontSize: 13, alignSelf: "center" }}>
          Add New Requirements
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const SalaryDetails = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          // fontFamily: "SemiBold",
          fontWeight: "normal",
          alignSelf: "center",
        }}
      >
        Salary Limitations
      </Text>

      <Text
        style={{
          // fontFamily: "SemiBold",
          fontWeight: "normal",
          marginHorizontal: 55,
          textAlign: "center",
          marginTop: 5,
          opacity: 0.4,
        }}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Text>

      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Salary
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 23,
          paddingVertical: 2,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="LKR"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 50, marginBottom: 5, marginTop: 5 }}>
        Upload Image
      </Text>
      <View
        style={{
          flexDirection: "row",

          marginHorizontal: 55,
          borderWidth: 2,
          paddingHorizontal: 10,
          borderColor: "#00a8b7",
          borderRadius: 9,
          paddingVertical: 50,
          width: "80%",
        }}
      >
        <TextInput
          placeholder="Drag and drop or browse to choose a file"
          placeholderTextColor="#00716F"
          style={{ paddingHorizontal: 10, marginBottom: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PopularJobs: {
    width: Dimensions.get("window").width - 60,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 200,
    color: "black",
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 5,
    borderColor: "#718287",
  },
  RecentJobs: {
    width: Dimensions.get("window").width - 30,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 20,
    height: 150,
    borderRadius: 20,
    color: "black",
    backgroundColor: "white",
    elevation: 5,
  },
  RecentJobsImage: {
    margin: 0,
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  PopularJobsImage: {
    margin: 0,
    width: 245,
    height: 120,
    borderRadius: 20,
  },
  PopularJobsBtn: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    height: 30,
    width: 60,
  },
  rowBetween: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  inputsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
});

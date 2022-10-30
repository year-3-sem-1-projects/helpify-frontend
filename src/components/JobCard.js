import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export const PopularJobs = (props) => {
  return (
    <TouchableOpacity style={styles.PopularJobs} onPress={props.navigate}>
      <View style={styles.rowBetween}>
        <View style={styles.row}>
          <Image
            source={{
              uri: props.jobdtls.jobimage,
            }}
            style={styles.PopularJobsImage}
          />
          <FontAwesome name="bookmark" size={20} color="black" />
        </View>
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          marginTop: 1,
        }}
      >
        {props.jobdtls.jobname}
      </Text>
      <View style={styles.row}>
        <Text style={{ color: "black", fontSize: 15, marginVertical: 10 }}>
          {" "}
          {props.jobdtls.jobsalary}
        </Text>
        <TouchableOpacity style={styles.PopularJobsBtn}>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              marginTop: 5,
              width: 100,
            }}
          >
            {props.jobdtls.jobtype}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export const RecentJobs = (props) => {
  return (
    <TouchableOpacity style={styles.RecentJobs} onPress={props.navigate}>
      <View style={styles.row}>
        <Image
          source={{
            uri: props.jobdtls.jobimage,
          }}
          style={styles.RecentJobsImage}
        />
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              marginTop: 15,
              marginLeft: 5,
            }}
          >
            {props.jobdtls.jobname}
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              marginTop: 1,
              marginLeft: 5,
            }}
          >
            {props.jobdtls.jobcompany} - {props.jobdtls.jobtype}
          </Text>
          <Text style={{ color: "black", fontSize: 15, marginVertical: 10 }}>
            {" "}
            {props.jobdtls.jobsalary}
          </Text>
        </View>
        <FontAwesome name="bookmark" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export const ApplicationJobs = () => {
  return (
    <View>
      <Text>JobCard</Text>
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
});

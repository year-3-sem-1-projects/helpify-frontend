import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import commonStyles from "../styles/common";
import { Dimensions } from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";

const Job = ({ navigation, route }) => {
  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${1234567890}";
    } else {
      phoneNumber = "telprompt:${1234567890}";
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          navigate={() => navigation.goBack()}
        />

        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {route.params.jobdtls.jobcompany}
        </Text>
        <View style={commonStyles.pageContainer}></View>
      </View>
      <View style={styles.pageContainer}>
        <View style={styles.row}>
          {/* <View style={styles.Image}> */}
          <View>
            <Image
              source={{
                uri: route.params.jobdtls.jobimage,
              }}
              style={styles.PopularJobImage}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text
              style={{
                color: "black",
                fontSize: 30,
                // width: Dimensions.get("window").width - 200,
                width: 200,
                fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              {route.params.jobdtls.jobname}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 20,
                width: 200,
                fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              {route.params.jobdtls.jobsalary} /{""}
              {route.params.jobdtls.jobsalarytime}
            </Text>
            <Text>{route.params.jobdtls.jobtype}</Text>
          </View>
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            marginTop: 20,
            fontWeight: "medium",
          }}
        >
          About This Odd Job
        </Text>
        <ScrollView style={{ height: 150 }}>
          <Text style={{ color: "grey" }}>{route.params.jobdtls.jobabout}</Text>
        </ScrollView>
        <Text style={{ color: "black", fontSize: 20 }}>Requirements</Text>
        <View style={{ height: 200 }}>
          <FlatList
            data={route.params.jobdtls.jobrequirements}
            renderItem={({ item }) => (
              <Text style={{ color: "grey", fontSize: 15, marginVertical: 1 }}>
                <Text style={{ color: "black" }}>* </Text>
                {""}
                {item}
              </Text>
            )}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.footerbtn}
            onPress={this.dialCall}
            activeOpacity={0.7}
          >
            <FontAwesome name="phone" size={24} color="black" />
            <Text style={{ color: "white", fontSize: 20 }}>Contact Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Job;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    color: "white",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgrey",
    padding: 20,
  },
  Image: {
    paddingVertical: 50,
    width: Dimensions.get("screen").width - 280,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    padding: 20,
    height: 120,
  },
  row: {
    flexDirection: "row",
  },
  PopularJobImage: {
    width: 120,
    height: 120,
    margin: 0,
    borderRadius: 10,
  },
  footerbtn: {
    shadowColor: "#00a8b7",
    shadowOffset: {
      width: 120,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 1.0,
    elevation: 24,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#00a8b7",
    padding: 10,
    alignItems: "center",
    paddingHorizontal: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

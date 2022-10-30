import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  navigation,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import commonStyles from "../styles/common";
import Jobs from "../data/Jobs.json";
import { PopularJobs, RecentJobs } from "../components/JobCard";
import { useNavigation } from "@react-navigation/native";
import SearchBarSection from "../components/SearchBarSection";
import FilterSection from "../components/FilterSection";
import { StatusBar } from "expo-status-bar";

const SEARCH_BAR_PLACEHOLDER_HOME_SCREEN = "Search for odd jobs";

const OddJobsScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showClose, setShowClose] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  return (
    <View style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyles.section}>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              width: 200,
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            Find Your{"\n"}
            <Text style={{ color: "#00a8b7" }}>Odd Job </Text>
            <Text>here</Text>
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View>
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
        </View>

        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
          <View style={styles.row}>
            <Text>Popular Jobs</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#00a8b7",
                }}
              >
                Show All
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            pagingEnabled
            data={Jobs.jobs}
            renderItem={({ item }) => (
              <PopularJobs
                jobdtls={item}
                navigate={() => navigation.navigate("Job", { jobdtls: item })}
              />
            )}
          />
        </View>

        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
          <View style={styles.row}>
            <Text>Recent Jobs</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#00a8b7",
                }}
              >
                Show All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Jobs.jobs}
            renderItem={({ item }) => (
              <RecentJobs
                jobdtls={item}
                navigate={() => navigation.navigate("Job", { jobdtls: item })}
              />
            )}
          />
        </View>
        {/* </ScrollView> */}
      </ScrollView>
    </View>
  );
};

export default OddJobsScreen;

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

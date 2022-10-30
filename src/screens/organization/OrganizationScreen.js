import { Dimensions, FlatList, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import commonStyles from '../../styles/common'
import axios from 'axios'
import { Avatar, List, Divider } from 'react-native-paper'
import SearchBarSection from '../../components/SearchBarSection'
import FilterSection from '../../components/FilterSection'
import { StatusBar } from 'expo-status-bar'
import { getAllOrganization } from '../../services/organization'

const SEARCH_BAR_PLACEHOLDER_HOME_SCREEN = 'Search for Organizations'
const { width, height } = Dimensions.get('window')
const img_url =
  'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2Fall-might.jpg9a59c8e1-94ba-42ad-b9fe-708a1d2a010c?alt=media&token=a5f3c4dc-5169-4afb-a9f5-04358f6e2917'

const OrganizationScreen = ({ navigation }) => {
  const [organizationData, setOrganizationData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showClose, setShowClose] = useState(false)
  const [showFilterOptions, setShowFilterOptions] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getAllOrganization()
      .then((res) => {
        setOrganizationData(res)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(true)
        setLoading(false)
        setOrganizationData([])
      })
    // Fetch data from API
  }, [])

  const ListItem = ({ item }) => {
    return (
      <>
        <List.Item
          key={item._id}
          style={styles.list_item}
          title={item.organization_name}
          titleStyle={styles.list_item_title}
          left={(props) => (
            <Avatar.Image size={width * 0.1} {...props} sourceb={{ uri: img_url }} />
          )}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => {
            navigation.navigate('Profile', { organization: item, previous_screen: 'Org' })
          }}
        />
        <Divider bold />
      </>
    )
  }
  // console.log('circleData', circleData)
  return (
    <View style={[commonStyles.container]}>
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
      <View style={[commonStyles.section, styles.list, styles.container]}>
        <FlatList
          data={organizationData}
          renderItem={ListItem}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={
            <View style={styles.empty_list}>
              <Text style={styles.empty_list_text}>No Organization Found</Text>
            </View>
          }

          // extraData={selectedId}
        />
      </View>
    </View>
  )
}

export default OrganizationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  list_item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    padding: width * 0.02,
  },
  list_item_title: {
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
})

import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBarSection from '../../components/SearchBarSection'
import FilterSection from '../../components/FilterSection'
import commonStyles from '../../styles/common'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'

const SEARCH_BAR_PLACEHOLDER_HOME_SCREEN = 'Search for odd jobs here'

const HomeScreen = () => {
  const [circleData, setCircleData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showClose, setShowClose] = useState(false)
  const [showFilterOptions, setShowFilterOptions] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get('http://192.168.1.2:6543/api/users/')
      .then((response) => {
        setCircleData(response.data.data.data)

        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
        setLoading(false)
        setCircleData([])
      })
    // Fetch data from API
  }, [])

  if (loading) {
    console.log('loading')
    return <Text>Loading...</Text>
  } else if (error) {
    return <Text>Error</Text>
  } else if (circleData.length !== 0) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
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
          <View style={commonStyles.section}>
            {circleData.map((circle) => (
              <Text key={circle._id}>{circle.name}</Text>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({})

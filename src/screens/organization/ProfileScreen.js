import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyles from '../../styles/common'
import { useRoute } from '@react-navigation/native'

function ProfileScreen({ navigation }) {
  const route = useRoute()
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.section}>
        <Text
          onPress={() => {
            navigation.navigate(route.params?.previous_screen)
          }}
        >
          Profile Screen
        </Text>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})

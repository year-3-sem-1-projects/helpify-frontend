import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View, Dimensions, Button, Text } from 'react-native'
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'
import { Avatar } from 'react-native-paper'
import React from 'react'
import PersonalHomeScreen from './src/screens/personal/HomeScreen'
import PersonalProfileScreen from './src/screens/personal/ProfileScreen'
import PersonalChatScreen from './src/screens/personal/ChatScreen'
import PersonalOddJobsScreen from './src/screens/personal/OddJobsScreen'
import PersonalAddOddJobsScreen from './src/screens/personal/AddOddJobsScreen'
import HomeScreen from './src/screens/organization/HomeScreen'
import OrganizationScreen from './src/screens/organization/OrganizationScreen'
import AddCampaignScreen from './src/screens/organization/AddCampaignScreen'
import ChatScreen from './src/screens/organization/ChatScreen'
import ProfileScreen from './src/screens/organization/ProfileScreen'
import Helpify from './src/components/Helpify'
import { THEME_COLOR, BACKGROUND_COLOR } from './src/styles/common'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const img_url =
  'https://firebasestorage.googleapis.com/v0/b/edupox-fa864.appspot.com/o/circle%2Fall-might.jpg9a59c8e1-94ba-42ad-b9fe-708a1d2a010c?alt=media&token=a5f3c4dc-5169-4afb-a9f5-04358f6e2917'
const { width, height } = Dimensions.get('window')

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const PersonalMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          size = height * 0.04
          if (route.name === 'Personal Home') {
            iconName = 'home'
          } else if (route.name === 'Odd Jobs') {
            iconName = 'suitcase'
          } else if (route.name === 'Add Jobs') {
            return (
              <View
                style={{
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  position: 'absolute',
                  top: -height * 0.045,
                }}
              >
                <AntDesign name="pluscircle" size={height * 0.09} color={THEME_COLOR} />
              </View>
            )
          } else if (route.name === 'Chat') {
            return <Ionicons name="ios-chatbubbles" size={size} color={color} />
          } else if (route.name === 'Profile') {
            iconName = 'circle-thin'
            return <Avatar.Image size={size} source={{ uri: img_url }} />
          }
          return <FontAwesome name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#00A8B7',
        tabBarInactiveTintColor: 'gray',
        headerStyle: styles.header,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: -height * 0.018,
          backgroundColor: '#ffffff',
          borderRadius: 25,
          height: height * 0.12,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: styles.header_title,
      })}
    >
      <Tab.Screen
        options={{
          headerTitle: () => <Helpify />,
          headerTitleAlign: 'start',
        }}
        name="Personal Home"
        component={PersonalHomeScreen}
      />
      <Tab.Screen name="Odd Jobs" component={PersonalOddJobsScreen} />
      <Tab.Screen name="Add Jobs" component={PersonalAddOddJobsScreen} />
      <Tab.Screen name="Chat" component={PersonalChatScreen} />
      <Tab.Screen name="Profile" component={PersonalProfileScreen} />
    </Tab.Navigator>
  )
}
const OrganizationMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          size = height * 0.04
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Org') {
            iconName = 'building'
          } else if (route.name === 'Add Campaign') {
            return (
              <View
                style={{
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  position: 'absolute',
                  top: -height * 0.045,
                }}
              >
                <AntDesign name="pluscircle" size={height * 0.09} color={THEME_COLOR} />
              </View>
            )
          } else if (route.name === 'Chat') {
            return <Ionicons name="ios-chatbubbles" size={size} color={color} />
          } else if (route.name === 'Profile') {
            iconName = 'circle-thin'
            return <Avatar.Image size={size} source={{ uri: img_url }} />
          }
          return <FontAwesome name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#00A8B7',
        tabBarInactiveTintColor: 'gray',
        headerStyle: styles.header,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: -height * 0.018,
          backgroundColor: '#ffffff',
          borderRadius: 25,
          height: height * 0.12,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: styles.header_title,
      })}
    >
      <Tab.Screen
        options={{
          headerTitle: () => <Helpify />,
          headerTitleAlign: 'start',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Org"
        component={OrganizationScreen}
        options={{
          headerTitle: 'Organization',
        }}
      />
      <Tab.Screen name="Add Campaign" component={AddCampaignScreen} />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarStyle: {
            position: 'absolute',
            display: 'none',
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          tabBarStyle: {
            position: 'absolute',
            display: 'none',
          },
          headerTitle: () => <Text>{route.params?.organization.organization_name || 'me'}</Text>,
          onPress: () => {
            console.log('press')
          },
        })}
      />

      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        onPress={() => {
          console.log('Profile')
        }}
      /> */}
    </Tab.Navigator>
  )
}

function MainScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Button title="Personal" onPress={() => navigation.navigate('Personal')} />
      <Button title="Organization" onPress={() => navigation.navigate('Organization')} />
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={MainScreen} />
        <Stack.Screen name="Personal" component={PersonalMenu} />
        <Stack.Screen name="Organization" component={OrganizationMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  header: {
    backgroundColor: BACKGROUND_COLOR,
  },
  header_title: {
    color: THEME_COLOR,
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
})

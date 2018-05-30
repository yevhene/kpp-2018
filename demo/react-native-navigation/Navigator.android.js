import React from 'react'
import { Icon } from 'react-native-elements'
import { DrawerNavigator, StackNavigator, SwitchNavigator } from 'react-navigation'

import MenuButton from './components/MenuButton'

import CoursesIndex from './screens/courses/Index'
import StudentsIndex from './screens/students/Index'
import StudentsShow from './screens/students/Show'
import SessionsCreate from './screens/sessions/Create'
import SessionsDestroy from './screens/sessions/Destroy'

const Courses = StackNavigator({
  CoursesIndex: {
    screen: CoursesIndex,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuButton navigation={navigation} />
    })
  }
})

const Students = StackNavigator({
  StudentsIndex: {
    screen: StudentsIndex,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuButton navigation={navigation} />
    })
  },
  StudentsShow: { screen: StudentsShow }
})

const Drawer = DrawerNavigator({
  Students: {
    screen: Students,
    navigationOptions: {
    title: 'Студенти',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'people' : 'people-outline'}
          color={tintColor}
        />
      )
    }
  },
  Courses: {
    screen: Courses,
    navigationOptions: {
      title: 'Курси',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'label' : 'label-outline'}
          color={tintColor}
        />
      )
    }
  },
  Settings: {
    screen: SessionsDestroy,
    navigationOptions: {
      title: 'Налаштування',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'lock' : 'lock-outline'}
          color={tintColor}
        />
      )
    }
  }
})

const Main = SwitchNavigator({
  Login: { screen: SessionsCreate },
  Drawer: { screen: Drawer }
}, {
  initialRouteName: 'Drawer'
})

export default Main

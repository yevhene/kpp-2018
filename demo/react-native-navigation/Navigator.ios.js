import React from 'react'
import { Icon } from 'react-native-elements'
import { StackNavigator, SwitchNavigator, TabNavigator } from 'react-navigation'

import CoursesIndex from './screens/courses/Index'
import StudentsIndex from './screens/students/Index'
import StudentsShow from './screens/students/Show'
import SessionsCreate from './screens/sessions/Create'
import SessionsDestroy from './screens/sessions/Destroy'

const Courses = StackNavigator({
  CoursesIndex: { screen: CoursesIndex }
})

const Students = StackNavigator({
  StudentsIndex: { screen: StudentsIndex },
  StudentsShow: { screen: StudentsShow }
})

const Tabs = TabNavigator({
  Students: {
    screen: Students,
    navigationOptions: {
    title: 'Студенти',
      tabBarIcon: ({ tintColor, focused }) => (
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
      tabBarIcon: ({ tintColor, focused }) => (
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
      tabBarIcon: ({ tintColor, focused }) => (
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
  Tabs: { screen: Tabs }
}, {
  initialRouteName: 'Tabs'
})

export default Main

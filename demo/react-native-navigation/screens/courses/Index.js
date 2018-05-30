import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { ScrollView, StyleSheet } from 'react-native'

import courses from '../../data/courses'

const CoursesIndex = () =>
  <ScrollView>
    <List containerStyle={styles.list}>
      {
        courses.map((course, i) => (
          <ListItem
            key={i}
            roundAvatar
            avatar={course.cover}
            title={course.name}
            subtitle={course.teacher}
            hideChevron={true}
          />
        ))
      }
    </List>
  </ScrollView>

CoursesIndex.navigationOptions = {
  title: 'Курси'
}

const styles = StyleSheet.create({
  list: {
    marginTop: 0
  }
})

export default CoursesIndex

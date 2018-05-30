import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { ScrollView, StyleSheet } from 'react-native'

import students from '../../data/students'

const StudentsIndex = ({ navigation }) =>
  <ScrollView>
    <List containerStyle={styles.list}>
      {
        students.map((student, i) => (
          <ListItem
            key={i}
            roundAvatar
            avatar={student.photo}
            title={student.name}
            subtitle={student.group}
            onPress={() => navigation.navigate('StudentsShow', { id: i })}
          />
        ))
      }
    </List>
  </ScrollView>

StudentsIndex.navigationOptions = {
  title: 'Студенти'
}

const styles = StyleSheet.create({
  list: {
    marginTop: 0
  }
})

export default StudentsIndex

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'

import students from '../../data/students'

const StudentsShow = ({ navigation }) => {
  const student = students[navigation.state.params.id]

  return (
    <View style={styles.container}>
      <Avatar
        xlarge
        rounded
        source={student.photo}
      />

      <Text h2 style={styles.name}>{student.name}</Text>

      <Text h4>{student.group}</Text>
    </View>
  )
}

StudentsShow.navigationOptions = {
  title: 'Студент'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  name: {
    textAlign: 'center'
  }
})

export default StudentsShow

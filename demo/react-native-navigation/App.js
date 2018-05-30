import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import Navigator from './Navigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

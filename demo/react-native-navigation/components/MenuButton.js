import React from 'react'
import { Icon } from 'react-native-elements'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const MenuButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('DrawerOpen')
    }}
    style={styles.container}
  >
    <Icon name="menu" />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    paddingTop: 3,
    paddingLeft: 15,
    flexDirection: 'row'
  }
})

export default MenuButton

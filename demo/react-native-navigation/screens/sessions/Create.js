import React from 'react'
import { Button, Icon, Text } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'

const SessionsCreate = ({ navigation }) =>
  <View style={styles.container}>
    <Text h1 style={styles.text}>Університет</Text>
    <Button
      icon={
        <Icon
          name='exit-to-app'
          size={24}
          color='white'
        />
      }
      iconRight={true}
      title="Ввійти"
      onPress={() => navigation.navigate('Tabs')}
    />
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  text: {
    textAlign: 'center'
  }
})

export default SessionsCreate

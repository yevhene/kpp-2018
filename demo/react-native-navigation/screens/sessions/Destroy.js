import React from 'react'
import { Button, Icon } from 'react-native-elements'
import { StyleSheet } from 'react-native'

const SessionsDestroy = ({ navigation }) =>
  <Button
    containerStyle={styles.container}
    icon={
      <Icon
        name='close'
        size={24}
        color='white'
      />
    }
    iconRight={true}
    title="Вийти"
    onPress={() => navigation.navigate('Login')}
  />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default SessionsDestroy

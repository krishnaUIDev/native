import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App () {
  const [value, setButton] = useState('hey you clicked me')
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Button title={'Click me'} onPress={() => setButton('hey')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

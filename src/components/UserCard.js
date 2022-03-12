/*
  Created by Haim Aharon Zilberman
  12/03/2022
  Simple user card for displaying in an app
*/

import React from "react"
import { Image, View, StyleSheet, Text } from "react-native"

const UserCard = ({userImage, userName}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: userImage }} />
      <Text style={styles.text}>{userName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 30,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
  text: {
    fontSize: 20
  }
});

export default UserCard
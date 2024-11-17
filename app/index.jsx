import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >index screen</Text>
      <Link href="/profile" style={styles.link} >Go to profile </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  link:{
    fontSize: 25,
    fontWeight: "semibold", 
    color: "blue"
  }
});
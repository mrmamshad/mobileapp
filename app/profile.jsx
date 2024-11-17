import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title} >Profile screen</Text>
    <Link href="/" style={styles.link} >Go to home </Link>
  </View>
  )
}

export default profile

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
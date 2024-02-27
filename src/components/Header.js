import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { Black, White } from "../constants";


export default function Header({ onBack }) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.LeftContainer} onPress={onBack} >
        <Image style={styles.BackArrow} source={require('../assets/backArrow.png')} />
      </TouchableOpacity>

      <View style={styles.MidContainer}>
        <Text style={styles.Title}>Movie Details</Text>
      </View>

      <View style={styles.RightContainer} />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: White,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  LeftContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  BackArrow: {
    height: 25,
    width: 25,
  },
  MidContainer: {
    height: 30,
    width: 30,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 5
  },
  Title: {
    color: Black,
    fontSize: 20,
    fontWeight: 'bold'
  },
  RightContainer: {
    flex: 1,
  },
})
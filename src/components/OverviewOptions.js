import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Black, White } from "../constants";


export default function OverviewOptions({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={onPress}
    ><Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: 150,
    width: 150,
    backgroundColor: Black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  Text: {
    color: White,
    fontSize: 20
  }
})
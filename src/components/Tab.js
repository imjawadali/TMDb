import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Black, White } from "../constants";


export default function Tab({ title, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[ styles.Tab, { backgroundColor: isSelected ? Black : White} ]}
      onPress={onPress}
    >
      <Text style={[ styles.Text, { color: isSelected ? White : Black } ]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Tab: {
    borderColor: Black,
    borderWidth: 1,
    width: 130,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  Text: {
    color: White,
    fontSize: 16
  }
})
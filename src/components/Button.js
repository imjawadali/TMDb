import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Black, White } from "../constants";


export default function Button({ style, textStyle, title, disabled, loading, onPress }) {
  return (
    <TouchableOpacity
      style={[ styles.Button, style ]}
      disabled={disabled}
      onPress={onPress}
    >
      {loading
      ? <ActivityIndicator size={'small'} color={White} />
      : <Text style={[ styles.Text, textStyle ]}>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: Black,
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
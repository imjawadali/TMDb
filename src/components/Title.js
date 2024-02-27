import React from "react";
import { StyleSheet, Text } from "react-native";
import { AppColor } from "../constants";


export default function Title({ style, title }) {
    return (
        <Text style={[ styles.Title, style ]}>{title}</Text>
    )
}

const styles = StyleSheet.create({
  Title: {
    color: AppColor,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
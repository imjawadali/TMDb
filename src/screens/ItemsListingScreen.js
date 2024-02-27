import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import Title from "../components/Title";
import { AppColor, Black, White } from "../constants";

function ItemsListingScreen({ navigation }) {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.TitleContainer}>
        <Title style={{ color: Black }} title={"To Buy Later"} />
        <TouchableOpacity onPress={() => navigation.navigate('AddItem')}>
          <Text style={styles.Text}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: White,
    paddingTop: 5,
    paddingHorizontal: 15
  },
  TitleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Text: {
    color: AppColor,
    fontSize: 20,
    fontWeight: '600'
  }
});

export default ItemsListingScreen
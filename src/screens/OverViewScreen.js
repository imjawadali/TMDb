import React from "react";
import { View, StyleSheet } from "react-native";

import OverviewOptions from "../components/OverviewOptions";
import { White } from "../constants";

function OverViewScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <OverviewOptions
        title={"List Items"}
        onPress={() => navigation.navigate('ItemsListing')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: White,
    display: 'flex',
    flexDirection: 'column'
  }
});

export default OverViewScreen
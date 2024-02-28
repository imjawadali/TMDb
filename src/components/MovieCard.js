import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { Black, Grey, IMAGE_URL, Silver } from "../constants";
import { getFormattedDate } from "../helpers";


export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity
      style={styles.Container}
      onPress={onPress}
    >
      <Image style={styles.Image} source={{
        uri: `${IMAGE_URL}${movie.poster_path}`
      }} />
      <View style={styles.TextContainer}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.Text} numberOfLines={1} ellipsizeMode='tail'>{movie.title}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.SubText, {
              flexWrap: 'wrap',
              color: Grey
            }]} numberOfLines={2} ellipsizeMode='tail'>{movie.overview}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.SubText}>Release date:
            <Text style={{ color: Grey }}> {getFormattedDate(movie.release_date)}</Text>
          </Text>
          <Text style={styles.SubText}>Language:
            <Text style={{ color: Grey }}> {movie.original_language}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: Silver,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10
  },
  Image: {
    height: 100,
    width: 80,
    backgroundColor: Black,
    borderRadius: 10
  },
  TextContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  Text: {
    fontSize: 20,
    fontWeight: '500',
    color: Black,
    width: '100%',
    flexWrap: 'wrap'
  },
  SubText: {
    width: '100%',
    color: Black,
    fontSize: 14
  }
})
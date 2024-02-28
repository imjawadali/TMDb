import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import Config from 'react-native-config'

import Title from "../components/Title";
import Separator from "../components/Separator";
import { AppColor, Black, Grey, White } from "../constants";
import LoadingScreen from "./LoadingScreen";
import { getDuration, getFormattedCurrency, getFormattedDate } from "../helpers";

function MovieDetailsScreen({ route }) {

  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${Config.MOVIE_DETAIL_API_URL.replace('MOVIE_ID', movieId)}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Config.API_ACCESS_TOKEN}`
      }
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setMovieDetails(json)
      })
      .catch(error => {
        console.error({ error });
        setLoading(false)
      });
  }, [movieId])

  return (
    loading
      ? <LoadingScreen />
      : <ScrollView style={styles.ScrollContainer}>
        <View style={styles.BannerImageContainer}>
          <Image style={[styles.BannerImage, { position: 'absolute' }]} source={{
            uri: `${Config.IMAGE_URL}${movieDetails.backdrop_path || movieDetails.poster_path}`
          }} />
          <View style={[styles.BannerImage, { opacity: 0.7 }]}>
            <View style={styles.Container}>
              <View style={styles.TopContainer}>
                <Image style={styles.Image} source={{
                  uri: `${Config.IMAGE_URL}${movieDetails.poster_path}`
                }} />
                <View style={styles.TextContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.Title} numberOfLines={1} ellipsizeMode='tail'>
                      <Title title={movieDetails.title} />
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.SubText, { color: Black }]} numberOfLines={1} ellipsizeMode='tail'>{movieDetails.tagline}</Text>
                  </View>
                  <Text style={styles.SubText}>Duration:
                    <Text style={{ color: Black }}> {getFormattedDate(movieDetails.release_date)}</Text>
                  </Text>
                  <Text style={styles.SubText}>Language:
                    <Text style={{ color: Black }}> {getDuration(movieDetails.runtime)}</Text>
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.SubText, {
                  flexWrap: 'wrap',
                  color: Black,
                  marginTop: 10
                }]} numberOfLines={4} ellipsizeMode='tail'>{movieDetails.overview}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Container}>
          <Text style={styles.Label}>Genres</Text>
          <Text style={styles.Text}>{movieDetails.genres?.map(genre => genre.name).join(', ')}</Text>
          <Separator />
          <Text style={styles.Label}>Original Language</Text>
          <Text style={styles.Text}>{movieDetails.spoken_languages?.map(language => language.english_name).join(', ')}</Text>
          <Separator />
          <Text style={styles.Label}>Status</Text>
          <Text style={styles.Text}>{movieDetails.status}</Text>
          <Separator />
          <Text style={styles.Label}>Budget</Text>
          <Text style={styles.Text}>{getFormattedCurrency(movieDetails.budget)}</Text>
          <Separator />
          <Text style={styles.Label}>Revenue</Text>
          <Text style={styles.Text}>{getFormattedCurrency(movieDetails.revenue)}</Text>
          <Separator />
          <Text style={styles.Label}>Website</Text>
          <TouchableOpacity onPress={async () => {
            await Linking.openURL(movieDetails.homepage)
          }}>
          <Text style={[styles.Text, { color: AppColor }]}>{movieDetails.homepage}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  ScrollContainer: {
    flex: 1,
    backgroundColor: White,
  },
  BannerImageContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BannerImage: {
    width: '100%',
    height: 200,
    backgroundColor: White
  },
  Container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  TopContainer: {
    display: 'flex',
    flexDirection: 'row'
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
  Title: {
    fontSize: 20,
    fontWeight: '500',
    color: Black,
    width: '100%',
    flexWrap: 'wrap'
  },
  SubText: {
    width: '100%',
    color: Grey,
    fontSize: 14
  },
  Label: {
    color: Black,
    fontSize: 16,
    fontWeight: '500'
  },
  Text: {
    color: Grey,
  }
});

export default MovieDetailsScreen
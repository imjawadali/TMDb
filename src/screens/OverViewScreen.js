import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Config from 'react-native-config'

import { Silver, White } from "../constants";
import Tabs from "../components/Tab";
import LoadingScreen from "./LoadingScreen";
import MovieCard from "../components/MovieCard";

function OverViewScreen({ navigation }) {

  const [selectedTab, setSelectedTab] = useState('Popular')
  const [moviesList, setMoviesList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${Config.MOVIE_API_URL.replace('FILTER', selectedTab === 'Popular' ? 'popularity.desc' : 'primary_release_date.desc')}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Config.API_ACCESS_TOKEN}`
      }
    })
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        if (json.results.length)
          setMoviesList(json.results)
      })
      .catch(error => {
        console.error({ error });
        setLoading(false)
      });
  }, [selectedTab])

  return (
    <View style={styles.Container}>
      <View style={styles.TabsContainer}>
        <Tabs title={'Popular'}
          isSelected={selectedTab === 'Popular'}
          onPress={() => setSelectedTab('Popular')} />
        <Tabs title={'Latest'}
          isSelected={selectedTab === 'Latest'}
          onPress={() => setSelectedTab('Latest')} />
      </View>
      {loading && !moviesList.length
        ? <LoadingScreen />
        : <ScrollView style={styles.ListContainer}>
          {moviesList.map(movie => {
            return <MovieCard key={movie.id} movie={movie}
              onPress={() => navigation.navigate('MovieDetails', { movieId: movie.id })} />
          })}
        </ScrollView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: White,
    display: 'flex',
    flexDirection: 'column'
  },
  TabsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15
  },
  ListContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 15
  }
});

export default OverViewScreen
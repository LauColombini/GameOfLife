import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Linking,
} from "react-native";
import FirstExample from "../../assets/img/FirstExample.png";
import SecondExample from "../../assets/img/SecondExample.png";
import ThirdExample from "../../assets/img/ThirdExample.png";
import FourthExample from "../../assets/img/FourthExample.png";
const Info = () => {
  const openWikipediaPage = () => {
    Linking.openURL("https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Game of Life Explanation</Text>
      <Text style={styles.description}>
        The Game of Life is not your typical computer game. It is a cellular
        automaton, and was invented by Cambridge mathematician John Conway.
      </Text>
      <Text style={styles.description}>
        This game became widely known when it was mentioned in an article
        published by Scientific American in 1970. It consists of a grid of cells
        which, based on a few mathematical rules, can live, die or multiply.
        Depending on the initial conditions, the cells form various patterns
        throughout the course of the game.
      </Text>

      <Text style={styles.subtitle}>Rules</Text>
      <Text style={styles.rule}>
        • Each cell with one or no neighbors dies, as if by solitude.
      </Text>

      <View style={styles.centerImage}>
        <Image source={FirstExample} style={{ width: 250, height: 100 }} />
      </View>
      <Text style={styles.rule}>
        • Each cell with four or more neighbors dies, as if by overpopulation.
      </Text>

      <View style={styles.centerImage}>
        <Image source={SecondExample} style={{ width: 250, height: 100 }} />
      </View>
      <Text style={styles.rule}>
        • Each cell with two or three neighbors survives.
      </Text>

      <View style={styles.centerImage}>
        <Image source={ThirdExample} style={{ width: 250, height: 100 }} />
      </View>
      <Text style={styles.subtitle}>
        For a space that is empty or unpopulated:
      </Text>
      <Text style={styles.rule}>
        • Each cell with three neighbors becomes populated.
      </Text>
      <View style={styles.centerImage}>
        <Image source={FourthExample} style={{ width: 250, height: 100 }} />
      </View>
      <Button title="More Info" onPress={openWikipediaPage} color="#007AFF" />
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  centerImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#38393c",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  rule: {
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 8,
  },
});

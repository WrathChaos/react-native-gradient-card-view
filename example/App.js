import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import GradientCard from "react-native-gradient-card-view";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GradientCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

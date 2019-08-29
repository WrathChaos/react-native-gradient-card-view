import React, { Fragment } from "react";
import { SafeAreaView, View, FlatList, StatusBar } from "react-native";
// import GradientCard from "react-native-gradient-card-view";
import GradientCard from "./lib/src/components/GradientCard";
import { LineChart } from "react-native-svg-charts";

const listData = [
  {
    name: "Bitcoin",
    shortName: "BTC",
    value: "$ 4081,95",
    change: "+ 1,48 ↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    image: require("./assets/Bitcoin.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Ethereum",
    shortName: "ETH",
    value: "$ 141.39",
    change: "+ 0,59 ↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    image: require("./assets/Ethereum.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  }
];

const App = () => {
  function renderItem(item) {
    return (
      <GradientCard
        key={item.name}
        style={{ marginTop: 16 }}
        title={item.name}
        subtitle={item.shortName}
        imageSource={item.image}
        centerTitle={item.value}
        centerSubtitle={item.change}
        centerSubtitleStyle={{
          fontSize: 12,
          marginLeft: 8,
          textAlign: "center",
          color: item.strokeColor
        }}
        rightComponent={
          <LineChart
            data={item.data}
            style={styles.chartStyle}
            contentInset={styles.chartContentInset}
            svg={{
              strokeWidth: 1.5,
              fill: item.fillColor,
              stroke: item.strokeColor
            }}
          />
        }
      />
    );
  }
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
        <View style={styles.container}>
          <View style={{ top: 24 }}>
            <FlatList
              data={listData}
              renderItem={({ item }) => renderItem(item)}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = {
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
  },
  chartStyle: {
    height: 100,
    width: 100
  },
  chartContentInset: {
    top: 30,
    bottom: 30
  }
};

export default App;

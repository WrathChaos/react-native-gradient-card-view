import React, { Fragment } from "react";
import { SafeAreaView, View, FlatList, StatusBar, Image } from "react-native";
import { LineChart } from "react-native-svg-charts";
// import GradientCard from "react-native-gradient-card-view";
import GradientCard from "./build/dist/GradientCard";

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
      Math.random() * 10,
    ],
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
      Math.random() * 10,
    ],
  },
];

const App = () => {
  const renderRightComponent = (
    data: any,
    fillColor: string,
    strokeColor: string
  ) => (
    <LineChart
      data={data}
      style={styles.chartStyle}
      contentInset={styles.chartContentInset}
      svg={{
        strokeWidth: 1.5,
        fill: fillColor,
        stroke: strokeColor,
      }}
    />
  );

  function renderItem(item: any) {
    const {
      name,
      shortName,
      strokeColor,
      fillColor,
      image,
      value,
      change,
      data,
    } = item;
    return (
      <GradientCard
        key={name}
        title={name}
        centerText={value}
        imageSource={image}
        resizeMode="contain"
        subtitle={shortName}
        centerSubText={change}
        rightComponent={renderRightComponent(data, fillColor, strokeColor)}
        style={{ marginTop: 16 }}
        centerSubtitleStyle={{
          fontSize: 12,
          marginLeft: 8,
          textAlign: "center",
          color: strokeColor,
        }}
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
              keyExtractor={(item) => item.name}
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
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  chartStyle: {
    height: 100,
    width: 100,
  },
  chartContentInset: {
    top: 30,
    bottom: 30,
  },
};

export default App;

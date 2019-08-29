<img alt="React Native Gradient Card View" src="https://github.com/WrathChaos/react-native-gradient-card-view/blob/master/assets/logo.png" width="1050"/>


[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-button)


[![Fully customizable Gradient Card View for React Native](https://img.shields.io/badge/-Fully%20customizable%20Gradient%20Card%20View%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-gradient-card-view)

[![npm version](https://img.shields.io/npm/v/react-native-gradient-card-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-gradient-card-view)
[![npm](https://img.shields.io/npm/dt/react-native-gradient-card-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-gradient-card-view)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg?style=for-the-badge)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
<img alt="React Native Gradient Card View" src="https://github.com/WrathChaos/react-native-gradient-card-view/blob/master/assets/Screenshots/example.png" width="49.7%"/>
</p>


## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i react-native-gradient-card-view
```


### Expo Version:

```ruby
"react-native-gradient-card-view": "WrathChaos/react-native-gradient-card-view#expo"
```


## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-svg": ">= 9.x.x",
"react-native-fast-image": ">= 5.x.x",
"react-native-linear-gradient": ">= 2.x.x"
```

#Expo Version Peer Dependencies: 

```
"expo": ">= 32.x.x",
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-expo-image-cache": ">= 3.x.x"
```


## Basic Usage

```ruby
<GradientCard />
```


## Advanced Usage

You can check the example for the advanced usage

```ruby
 <GradientCard
        style={{ marginTop: 16 }}
        title={item.name}
        subtitle={item.shortName}
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
```

### Configuration - Props


| Property            |    Type    |           Default            | Description                                                |
| ------------------- | :--------: | :--------------------------: | ---------------------------------------------------------- |
| start               |   {x,y}    |        { x: 0, y: 0 }        | change the direction of the gradient                       |
| end                 |   {x,y}    |        { x: 1, y: 0 }        | change the direction of the gradient                       |
| gradientColors      |  [color]   |      check the example       | change the gradient's color array                          |
| style               |   style    |             null             | add any style to the whole container                       |
| shadowStyle         |   style    |      check the example       | set your own shadow style                                  |
| shadowColor         |   color    |           #595959            | change the shadow color                                    |
| outerContainer      |   style    |            style             | set your own outer container style (NOT recommended!)      |
| height              |   number   |              70              | change the card's height                                   |
| width               |   number   |     device width * 0.95      | change the card's width                                    |
| borderRadius        |   number   |              20              | change the card's border radius                            |
| innerContainer      |   style    |            style             | set your own inner container style (NOT recommended!)      |
| imageComponent      | component  |          FastImage           | set your own image component                               |
| imageStyle          |   style    |            style             | change the image's style                                   |
| imageWidth          |   number   |              35              | change the image's width                                   |
| imageHeight         |   number   |              35              | change the image's height                                  |
| imageBorderRadius   |   number   |              10              | change the image's border radius                           |
| imageSource         |    file    |        default image         | set your own image source                                  |
| imageResizeMode     | resizeMode | FastImage.resizeMode.contain | change the FastImage.sizeMode's any mode which is provided |
| title               |   string   |            "BTC"             | change the title string with your data                     |
| subtitle            |   string   |          "Bitcoin"           | change the subtitle string with your data                  |
| centerTitle         |   string   |         "$ 4081,95"          | change the center title string with your data              |
| centerSubtitle      |   string   |          "+ 1,48 ↑"          | change the center subtitle string with your data           |
| titleStyle          |   style    |            style             | set your own style for title component                     |
| subtitleStyle       |   style    |            style             | set your own style for subtitle component                  |
| leftComponent       | component  |     text based component     | set your component for the left part                       |
| centerTitleStyle    |   style    |            style             | set your own style for center title component              |
| centerSubtitleStyle |   style    |            style             | set your own style for center subtitle component           |
| centerComponent     | component  |     text based component     | set your component for the center part                     |
| rightComponent      | component  |             null             | set your own component for the right component             |

### ToDos

- [ ] Make an Expo Version
- [x] LICENSE
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Gradient Card View Library is available under the MIT license. See the LICENSE file for more info.

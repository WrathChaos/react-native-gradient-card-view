import React from "react";
import { Text, View } from "react-native";
import styles, {
  _shadowStyle,
  _imageStyle,
  _gradientColors,
  _outerContainer
} from "./styles/GradientCard.style";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";

const defaultImageSource = require("../../../assets/Bitcoin.png");

const GradientCard = props => {
  const {
    end,
    start,
    title,
    width,
    height,
    subtitle,
    imageWidth,
    imageHeight,
    titleStyle,
    imageStyle,
    centerTitle,
    shadowStyle,
    imageSource,
    borderRadius,
    subtitleStyle,
    centerSubtitle,
    outerContainer,
    innerContainer,
    gradientColors,
    imageComponent,
    rightComponent,
    imageResizeMode,
    imageBorderRadius
  } = props;

  return (
    <View style={[shadowStyle || _shadowStyle]}>
      <LinearGradient
        start={start || { x: 0, y: 0 }}
        end={end || { x: 1, y: 0 }}
        colors={gradientColors || _gradientColors}
        style={outerContainer || _outerContainer(height, width, borderRadius)}
      >
        <View style={innerContainer || styles.innerContainer}>
          {imageComponent || (
            <FastImage
              style={
                imageStyle ||
                _imageStyle(imageWidth, imageHeight, imageBorderRadius)
              }
              source={imageSource || defaultImageSource}
              resizeMode={imageResizeMode || FastImage.resizeMode.contain}
            />
          )}
          <View style={styles.column}>
            <Text style={titleStyle || styles.titleStyle}>
              {title || "BCT"}
            </Text>
            <Text style={subtitleStyle || styles.subtitleStyle}>
              {subtitle || "Bitcoin"}
            </Text>
          </View>

          <View style={[styles.column, styles.centerTextContainer]}>
            <Text style={styles.centerTitleStyle}>
              {centerTitle || "$ 4081,95"}
            </Text>
            <Text style={styles.centerSubtitleStyle}>
              {centerSubtitle || "+ 1,48 ↑"}
            </Text>
          </View>
          <View style={[styles.column, styles.rightContainer]}>
            {rightComponent || null}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default GradientCard;

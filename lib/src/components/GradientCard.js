import React from "react";
import { Text, View } from "react-native";
import styles, {
  _shadowStyle,
  _imageStyle,
  _gradientColors,
  _outerContainer
} from "./styles/GradientCard.style";
import { LinearGradient } from "expo-linear-gradient";
import CachedImage from "react-native-easy-cached-image";

const defaultImageSource = require("../../../assets/Bitcoin.png");

const GradientCard = props => {
  const {
    end,
    start,
    title,
    width,
    style,
    height,
    subtitle,
    imageWidth,
    imageHeight,
    shadowColor,
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
    centerTitleStyle,
    imageBorderRadius,
    centerSubtitleStyle
  } = props;

  return (
    <View style={[style, shadowStyle || _shadowStyle(shadowColor)]}>
      <LinearGradient
        start={start || [0, 0]}
        end={end || [1, 0]}
        colors={gradientColors || _gradientColors}
        style={outerContainer || _outerContainer(height, width, borderRadius)}
      >
        <View style={innerContainer || styles.innerContainer}>
          {imageComponent || (
            <CachedImage
              source={imageSource || defaultImageSource}
              resizeMode={imageResizeMode || "contain"}
              style={
                imageStyle ||
                _imageStyle(imageWidth, imageHeight, imageBorderRadius)
              }
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
            <Text style={centerTitleStyle || styles.centerTitleStyle}>
              {centerTitle || "$ 4081,95"}
            </Text>
            <Text style={centerSubtitleStyle || styles.centerSubtitleStyle}>
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

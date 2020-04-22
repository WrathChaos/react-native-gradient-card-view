import * as React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import styles, {
  _shadowStyle,
  _imageStyle,
  _outerContainer,
} from "./GradientCard.style";
import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

const GradientCard = (props) => {
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
    ImageComponent,
    rightComponent,
    imageResizeMode,
    centerTitleStyle,
    imageBorderRadius,
    centerSubtitleStyle,
  } = props;

  const renderImage = () => {
    return (
      imageComponent || (
        <ImageComponent
          source={imageSource}
          resizeMode={imageResizeMode}
          style={
            imageStyle ||
            _imageStyle(imageWidth, imageHeight, imageBorderRadius)
          }
        />
      )
    );
  };

  const renderTitles = () => {
    return (
      <View style={styles.column}>
        <Text style={titleStyle || styles.titleStyle}>{title}</Text>
        <Text style={subtitleStyle || styles.subtitleStyle}>{subtitle}</Text>
      </View>
    );
  };

  const renderCenterTitle = () => {
    return (
      <View style={[styles.column, styles.centerTextContainer]}>
        <Text style={centerTitleStyle || styles.centerTitleStyle}>
          {centerTitle}
        </Text>
        <Text style={centerSubtitleStyle || styles.centerSubtitleStyle}>
          {centerSubtitle}
        </Text>
      </View>
    );
  };

  const renderRightComponent = () => {
    return (
      <View style={[styles.column, styles.rightContainer]}>
        {rightComponent}
      </View>
    );
  };

  return (
    <View style={[style, shadowStyle || _shadowStyle(shadowColor)]}>
      <LinearGradient
        end={end}
        start={start}
        colors={gradientColors}
        style={outerContainer || _outerContainer(height, width, borderRadius)}
      >
        <View style={innerContainer || styles.innerContainer}>
          {renderImage()}
          {renderTitles()}
          {renderCenterTitle()}
          {renderRightComponent()}
        </View>
      </LinearGradient>
    </View>
  );
};

GradientCard.propTypes = {
  end: PropTypes.object,
  start: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  shadowColor: PropTypes.string,
  centerTitle: PropTypes.string,
  borderRadius: PropTypes.number,
  gradientColors: PropTypes.array,
  centerSubtitle: PropTypes.string,
  imageResizeMode: PropTypes.string,
  imageBorderRadius: PropTypes.number,
};

GradientCard.defaultProps = {
  height: 70,
  title: "BCT",
  imageWidth: 35,
  imageHeight: 35,
  borderRadius: 20,
  end: { x: 1, y: 0 },
  subtitle: "Bitcoin",
  width: width * 0.95,
  rightComponent: null,
  ImageComponent: Image,
  start: { x: 0, y: 0 },
  imageBorderRadius: 10,
  shadowColor: "#595959",
  centerTitle: "$ 4081,95",
  centerSubtitle: "+ 1,48 ↑",
  imageResizeMode: "contain",
  gradientColors: [
    "rgba(85,96,127,1.0)",
    "rgba(68, 79, 112, 1.0)",
    "rgba(48, 58, 87,1.0)",
  ],
};

export default GradientCard;

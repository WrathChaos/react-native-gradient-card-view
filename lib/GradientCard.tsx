import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import styles, {
  _shadowStyle,
  _imageStyle,
  _outerContainer,
} from "./GradientCard.style";
import LinearGradient from "react-native-linear-gradient";

const { width: ScreenWidth } = Dimensions.get("window");

const DEFAULT_GRADIENT_COLOR = [
  "rgba(85,96,127,1.0)",
  "rgba(68, 79, 112, 1.0)",
  "rgba(48, 58, 87,1.0)",
];

export interface ISource {
  source: string | { uri: string };
}

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;

interface IGradientCardProps {
  title: string;
  width?: number;
  height?: number;
  subtitle: string;
  centerText?: string;
  imageWidth?: number;
  imageHeight?: number;
  shadowColor?: string;
  borderRadius?: number;
  centerSubText?: string;
  imageBorderRadius?: number;
  imageComponent?: any;
  rightComponent?: any;
  ImageComponent?: any;
  imageSource?: ISource;
  gradientColors?: Array<string>;
  imageStyle?: ImageStyle;
  titleTextStyle?: TextStyle;
  centerTextStyle?: TextStyle;
  subtitleTextStyle?: TextStyle;
  centerSubtextStyle?: TextStyle;
  style?: CustomStyleProp;
  outerContainerStyle?: CustomStyleProp;
  innerContainerStyle?: CustomStyleProp;
}

const GradientCard = (props: IGradientCardProps) => {
  const {
    title,
    style,
    subtitle,
    imageStyle,
    centerText,
    imageSource,
    centerSubText,
    titleTextStyle,
    imageComponent,
    rightComponent,
    centerTextStyle,
    subtitleTextStyle,
    centerSubtextStyle,
    outerContainerStyle,
    innerContainerStyle,
    height = 70,
    imageWidth = 35,
    imageHeight = 35,
    borderRadius = 20,
    ImageComponent = Image,
    imageBorderRadius = 10,
    shadowColor = "#595959",
    width = ScreenWidth * 0.95,
    gradientColors = DEFAULT_GRADIENT_COLOR,
  } = props;

  const renderImage = () => {
    return (
      imageComponent || (
        <ImageComponent
          {...props}
          source={imageSource}
          style={[
            _imageStyle(imageHeight, imageWidth, imageBorderRadius),
            imageStyle,
          ]}
        />
      )
    );
  };

  const renderTitles = () => {
    return (
      <View style={styles.column}>
        <Text style={[styles.titleStyle, titleTextStyle]}>{title}</Text>
        <Text style={[styles.subtitleStyle, subtitleTextStyle]}>
          {subtitle}
        </Text>
      </View>
    );
  };

  const renderCenterComponent = () => {
    return (
      <View style={[styles.column, styles.centerTextContainer]}>
        <Text style={[styles.centerTitleStyle, centerTextStyle]}>
          {centerText}
        </Text>
        <Text style={[styles.centerSubtitleStyle, centerSubtextStyle]}>
          {centerSubText}
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
    <View style={[_shadowStyle(shadowColor), style]}>
      <LinearGradient
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        colors={gradientColors}
        {...props}
        style={[
          _outerContainer(height, width, borderRadius),
          outerContainerStyle,
        ]}
      >
        <View style={[styles.innerContainer, innerContainerStyle]}>
          {renderImage()}
          {renderTitles()}
          {renderCenterComponent()}
          {renderRightComponent()}
        </View>
      </LinearGradient>
    </View>
  );
};

export default GradientCard;

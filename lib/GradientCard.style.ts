import {
  Platform,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
  ImageStyle,
} from "react-native";

const { width } = Dimensions.get("window");

interface Style {
  column: ViewStyle;
  titleStyle: TextStyle;
  subtitleStyle: TextStyle;
  innerContainer: ViewStyle;
  rightContainer: ViewStyle;
  centerTitleStyle: TextStyle;
  centerTextContainer: ViewStyle;
  centerSubtitleStyle: TextStyle;
}

export function _shadowStyle(shadowColor: string): ViewStyle {
  return {
    ...Platform.select({
      ios: {
        shadowColor,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 1,
          height: 3,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  };
}

export function _outerContainer(
  height: number,
  width: number,
  borderRadius: number
): ViewStyle {
  return {
    width,
    height,
    borderRadius,
  };
}

export function _imageStyle(
  height: number,
  width: number,
  borderRadius: number
): ImageStyle {
  return {
    width,
    height,
    borderRadius,
  };
}

export default StyleSheet.create<Style>({
  innerContainer: {
    flex: 1,
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  column: { flexDirection: "column" },
  titleStyle: {
    width: 85,
    color: "white",
    marginLeft: 8,
    textAlign: "left",
    fontWeight: "bold",
  },
  subtitleStyle: {
    width: 85,
    fontSize: 12,
    marginLeft: 8,
    color: "#E2E2E2",
    textAlign: "left",
  },
  centerTextContainer: {
    marginLeft: width * 0.01,
  },
  centerTitleStyle: {
    marginLeft: 8,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  centerSubtitleStyle: {
    fontSize: 12,
    marginLeft: 8,
    textAlign: "center",
    color: "rgba(163, 224, 97, 1.0)",
  },
  rightContainer: { left: 40 },
});

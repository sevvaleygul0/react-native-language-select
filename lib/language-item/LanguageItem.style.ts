import { StyleSheet, ViewStyle, TextStyle } from "react-native";

export const _itemContainer = (
  backgroundColor: string,
  borderColor: string,
  width: number,
  height: number,
): ViewStyle => ({
  borderColor: borderColor,
  backgroundColor: backgroundColor,
  borderWidth: 2,
  borderRadius: 20,
  height: height,
  width: width,
  marginBottom: 12,
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: 24,
});

export const _titleStyle = (color: string): TextStyle => ({
  fontWeight: "600",
  color: color,
  fontSize: 16,
});

export default StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: 18,
  },
  checkImageStyle: {
    position: "absolute",
    right: 24,
    width: 20,
    height: 20,
  },
});

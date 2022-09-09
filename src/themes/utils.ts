import type { TextStyle, ViewStyle } from "react-native";

export const styleToArray = (style: ViewStyle | TextStyle | ViewStyle[] | TextStyle[]): ViewStyle[] | TextStyle[] => {

    const st = Array.isArray(style) ? style : [style];
    return st
}
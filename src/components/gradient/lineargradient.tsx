// import { StyleSheet, ViewStyle } from "react-native";
// import React from "react";
// import { convertMargin, convertPadding, SpaceMP } from "../../themes";
// import { LinearGradientProps, LinearGradient } from "react-native-linear-gradient";

// interface Props extends LinearGradientProps {
//   style?: ViewStyle | ViewStyle[];
//   m?: SpaceMP;
//   p?: SpaceMP;
// }

// const Lineargradient = ({
//   style = {},
//   m = 0,
//   p = 0,
//   children = <></>,
//   ...restProps
// }: Props) => {
//   const st = Array.isArray(style) ? style : [style];
//   return (
//     <LinearGradient
//       start={{ x: 0, y: 0.5 }}
//       style={[styles.container, convertMargin(m,artocks.screenRefrence.height), convertPadding(p,artocks.screenRefrence.height), ...st]}
//       {...restProps}
//     >
//       {children}
//     </LinearGradient>
//   );
// };

// export default Lineargradient;

// const styles = StyleSheet.create({
//   container: {
//     height: 2,
//   },
// });

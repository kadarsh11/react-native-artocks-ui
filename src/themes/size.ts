import { RFValue } from 'react-native-responsive-fontsize';

export const s = {
  s2: 2,
  s4: 4,
  s6: 6,
  s8: 8,
  s10: 10,
  s12: 12,
  s14: 14,
  s16: 16,
  s20: 20,
  s24: 24,
  s28: 28,
  s32: 32,
  s48: 48,
  s64: 64,
};

type SizeConstraint = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36

let obj: any = {};

function getValue(s: number, height: number) {
  if (obj[s]) return obj[s];
  obj[s] = RFValue(s, height);
  return obj[s];
}


export type SpaceMP =
  | [SizeConstraint, SizeConstraint, SizeConstraint, SizeConstraint]
  | [SizeConstraint, SizeConstraint, SizeConstraint]
  | [SizeConstraint, SizeConstraint]
  | [SizeConstraint]
  | SizeConstraint
  | undefined;

export function convertMargin(margin: SpaceMP, height: number = 800) {
  if (!margin) {
    return {};
  } else if (typeof margin === "number") {
    return { margin: getValue(margin, height) };
  } else if (Array.isArray(margin) && margin.length === 1) {
    return { marginTop: getValue(margin[0], height) };
  } else if (Array.isArray(margin) && margin.length === 2) {
    return { marginHorizontal: getValue(margin[0], height), marginVertical: getValue(margin[1], height) };
  }
  else if (Array.isArray(margin) && margin.length === 3) {
    return {
      marginTop: getValue(margin[0], height),
      marginBottom: getValue(margin[2], height),
      marginRight: getValue(margin[1], height),
    };
  }
  else if (Array.isArray(margin) && margin.length === 4) {
    return {
      marginTop: getValue(margin[0], height),
      marginBottom: getValue(margin[2], height),
      marginRight: getValue(margin[1], height),
      marginLeft: getValue(margin[3], height),
    };
  } else {
    return {};
  }
};

export function convertPadding(padding: SpaceMP, height: number = 800) {
  if (!padding) {
    return {};
  } else if (typeof padding === "number") {
    return { padding: getValue(padding, height) };
  } else if (Array.isArray(padding) && padding.length === 1) {
    return { paddingTop: getValue(padding[0], height) };
  } else if (Array.isArray(padding) && padding.length === 2) {
    return { paddingHorizontal: getValue(padding[0], height), paddingVertical: getValue(padding[1], height) };
  } else if (Array.isArray(padding) && padding.length === 3) {
    return {
      paddingTop: getValue(padding[0], height),
      paddingBottom: getValue(padding[2], height),
      paddingRight: getValue(padding[1], height),
    };
  }
  else if (Array.isArray(padding) && padding.length === 4) {
    return {
      paddingTop: getValue(padding[0], height),
      paddingBottom: getValue(padding[2], height),
      paddingRight: getValue(padding[1], height),
      paddingLeft: getValue(padding[3], height),
    };
  } else {
    return {};
  }
};

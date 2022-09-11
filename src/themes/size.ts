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

export type SpaceMP =
  | [number, number, number, number]
  | [number, number, number]
  | [number, number]
  | [number]
  | number
  | undefined;

export const convertMargin = (margin: SpaceMP) => {
  if (!margin) {
    return {};
  } else if (typeof margin === "number") {
    return { margin };
  } else if (Array.isArray(margin) && margin.length === 1) {
    return { marginTop: margin[0] };
  } else if (Array.isArray(margin) && margin.length === 2) {
    return { marginHorizontal: margin[0], marginVertical: margin[1] };
  }
  else if (Array.isArray(margin) && margin.length === 3) {
    return {
      marginTop: margin[0],
      marginBottom: margin[2],
      marginRight: margin[1],
    };
  }
  else if (Array.isArray(margin) && margin.length === 4) {
    return {
      marginTop: margin[0],
      marginBottom: margin[2],
      marginRight: margin[1],
      marginLeft: margin[3],
    };
  } else {
    return {};
  }
};

export const convertPadding = (padding: SpaceMP) => {
  if (!padding) {
    return {};
  } else if (typeof padding === "number") {
    return { padding };
  } else if (Array.isArray(padding) && padding.length === 1) {
    return { paddingTop: padding[0] };
  } else if (Array.isArray(padding) && padding.length === 2) {
    return { paddingHorizontal: padding[0], paddingVertical: padding[1] };
  } else if (Array.isArray(padding) && padding.length === 3) {
    return {
      paddingTop: padding[0],
      paddingBottom: padding[2],
      paddingRight: padding[1],
    };
  }
  else if (Array.isArray(padding) && padding.length === 4) {
    return {
      paddingTop: padding[0],
      paddingBottom: padding[2],
      paddingRight: padding[1],
      paddingLeft: padding[3],
    };
  } else {
    return {};
  }
};

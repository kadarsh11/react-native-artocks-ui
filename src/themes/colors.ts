const generateVariants = (color: string) => {
  return {
    1: `${color}`,
    [0.75]: `${color}BF`,
    [0.5]: `${color}80`,
    [0.25]: `${color}40`,
    [0.1]: `${color}1A`,
  };
};

export const colors = {
  primary: generateVariants("#231955"),
  secondary: generateVariants("#1F4690"),
  tertiary: generateVariants("#E8AA42"),
  quaternary: generateVariants("#FFE5B4"),
  black: generateVariants("#000000"),
  white: "#ffffff",
  lightwhite: generateVariants("#EFEFEF"),
};

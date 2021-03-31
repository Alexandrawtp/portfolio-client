const LightingColors = (theme, shape) => {
  switch (theme) {
    case 1:
      return `color-1 ${shape}`;
    case 2:
      return `color-2 ${shape}`;
    case 3:
      return `color-3 ${shape}`;
    case 4:
      return `color-4 ${shape}`;
    default:
      return `color-default ${shape}`;
  }
};

export default LightingColors;
const SecondaryColor = (theme, shape) => {
  switch (theme) {
    case "Blue":
      return `color-1 ${shape}`;
    case "Red":
      return `color-2 ${shape}`;
    case "Yellow":
      return `color-3 ${shape}`;
    case "Neutral":
      return `color-4 ${shape}`;
    default:
      return `secondary-default ${shape}`;
  }
};

export default SecondaryColor;
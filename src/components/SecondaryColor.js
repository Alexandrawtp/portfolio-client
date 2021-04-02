const SecondaryColor = (theme, shape) => {
  switch (theme) {
    case "Blue":
      return `secondary-1 ${shape}`;
    case "Red":
      return `secondary-2 ${shape}`;
    case "Yellow":
      return `secondary-3 ${shape}`;
    case "Neutral":
      return `secondary-4 ${shape}`;
    default:
      return `secondary-default ${shape}`;
  }
};

export default SecondaryColor;
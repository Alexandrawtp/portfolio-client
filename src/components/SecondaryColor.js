const SecondaryColor = (theme, shape) => {
  switch (theme) {
    case 1:
      return `secondary-1 ${shape}`;
    case 2:
      return `secondary-2 ${shape}`;
    case 3:
      return `secondary-3 ${shape}`;
    case 4:
      return `secondary-4 ${shape}`;
    default:
      return `secondary-default ${shape}`;
  }
};

export default SecondaryColor;
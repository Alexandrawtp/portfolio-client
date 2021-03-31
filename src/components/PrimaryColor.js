const PrimaryColor = (theme, shape) => {
  switch (theme) {
    case 1:
      return `primary-1 ${shape}`;
    case 2:
      return `primary-2 ${shape}`;
    case 3:
      return `primary-3 ${shape}`;
    case 4:
      return `primary-4 ${shape}`;
    default:
      return `primary-default ${shape}`;
  }
};

export default PrimaryColor;
const ProjectBtnsColors = (theme, shape) => {
  switch (theme) {
    case "Blue":
      return `primary-1 ${shape}`;
    case "Red":
      return `primary-2 ${shape}`;
    case "Yellow":
      return `primary-3 ${shape}`;
    case "Neutral":
      return `primary-4 ${shape}`;
    default:
      return `primary-default ${shape}`;
  }
};

export default ProjectBtnsColors;
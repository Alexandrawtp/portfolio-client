const ProjectBtnEdit = (theme, shape) => {
  switch (theme) {
    case "Blue":
      return `color-middle-1 ${shape}`;
    case "Red":
      return `color-middle-2 ${shape}`;
    case "Yellow":
      return `color-middle-3 ${shape}`;
    case "Neutral":
      return `color-middle-4 ${shape}`;
    default:
      return `color-middle-default ${shape}`;
  }
};

export default ProjectBtnEdit;
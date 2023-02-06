export const colorPicker = color => {
  switch (color) {
    case 'good':
      return '#4fe062';
    case 'neutral':
      return '#f0db1a';
    case 'bad':
      return '#f06a4a';
    default:
      return '#303030';
  }
};

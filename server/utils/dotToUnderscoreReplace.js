export const dotToUnderscoreReplace = (string) => {
  return string.replace(/\./g, '_');
};

export const underscoreToDotReplace = (string) => {
  return string.replace(/_/g, '.');
};

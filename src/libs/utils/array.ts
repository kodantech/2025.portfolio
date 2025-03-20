export const createNumberArray = (length: number) => {
  return Array.from({ length })
    .fill(null)
    .map((_, i) => i);
};

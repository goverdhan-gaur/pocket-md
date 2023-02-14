export const px = (size: number, base = 16) => `
  font-size: ${size}px; // older browsers fallback
  font-size: calc(${size / base} * 1rem);
`;
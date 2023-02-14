export const px = (size: number, base = 16) => `
  font-size: ${size}px;
  font-size: calc(${size / base} * 1rem);
`

export const truncateString = (str: string, maxChars: number = 70) => {
  if (str.length > maxChars) {
    const short = str.substring(0, maxChars);
    return `${short}..`;
  }
  return str;
};

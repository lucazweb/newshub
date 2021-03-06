export const truncateString = (str: string, maxChars: number = 60) => {
  if (str && str.length > maxChars) {
    const short = str.substring(0, maxChars);
    return `${short}..`;
  }
  return str;
};

export const handleHTMLString = (str: string) => {
  let pattern = /<[^>]*>/g;
  return str ? str.replace(pattern, '') : str;
};

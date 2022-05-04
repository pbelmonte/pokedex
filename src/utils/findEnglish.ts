interface ObjectValue {
  language: { name: string };
  [key: string]: string | { name: string };
}

export default (entries: ObjectValue[]) => {
  const filtered = entries.filter((entry) => entry.language.name === "en");
  if (filtered.length > 0) {
    return filtered[0];
  }
  return null;
};

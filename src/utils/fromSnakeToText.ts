export default (name: string): string => {
  const separated = name.split("-");
  const capitalized = separated.map(
    (item: string) => item.charAt(0).toUpperCase() + item.slice(1),
  );
  return capitalized.join(" ");
};

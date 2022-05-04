import capitalize from "./capitalize";

export default (name: string): string => {
  const separated = name.split("-");
  const capitalized = separated.map((item: string) => capitalize(item));
  return capitalized.join(" ");
};

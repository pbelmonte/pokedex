// This file exists because Tailwind does not include dynamically constructed
// classes (https://tailwindcss.com/docs/content-configuration#dynamic-class-names).
// This workaround lets us construct classes dynamically because this ensures
// the classes are present and used

type ClassMap = { [key: string]: string };

export const backgroundClassMap: ClassMap = {
  normal: "bg-normal-tag",
  fighting: "bg-fighting-tag",
  flying: "bg-flying-tag",
  poison: "bg-poison-tag",
  ground: "bg-ground-tag",
  rock: "bg-rock-tag",
  bug: "bg-bug-tag",
  ghost: "ghost-tag",
  steel: "bg-steel-tag",
  fire: "bg-fire-tag",
  water: "bg-water-tag",
  grass: "bg-grass-tag",
  electric: "bg-electric-tag",
  psychic: "bg-psychic-tag",
  ice: "bg-ice-tag",
  dragon: "dragon-tag",
  dark: "bg-dark-tag",
  fairy: "bg-fairy-tag",
};

export const textClassMap: ClassMap = {
  normal: "text-normal-tag",
  fighting: "text-fighting-tag",
  flying: "text-flying-tag",
  poison: "text-poison-tag",
  ground: "text-ground-tag",
  rock: "text-rock-tag",
  bug: "text-bug-tag",
  ghost: "ghost-tag",
  steel: "text-steel-tag",
  fire: "text-fire-tag",
  water: "text-water-tag",
  grass: "text-grass-tag",
  electric: "text-electric-tag",
  psychic: "text-psychic-tag",
  ice: "text-ice-tag",
  dragon: "dragon-tag",
  dark: "text-dark-tag",
  fairy: "text-fairy-tag",
};

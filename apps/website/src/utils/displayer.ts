export const displaySpecies = (species: string) => {
  const result = species.split("")[0].toUpperCase() + species.slice(1)
  return result
}

export const displayPronouns = (pronouns: string) => {
  const PRONOUNS = {
    hehim: "He/Him",
    sheher: "She/Her",
    theythem: "They/Them"
  }

  return PRONOUNS[pronouns]
}

export interface Profile {
  unitNames: { [key: string]: { abilityNames?: string[] } };
  battleTraitTypes: string[];
  armyAbilities: string[];
}

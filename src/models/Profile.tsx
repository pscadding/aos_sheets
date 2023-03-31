export interface Profile {
  id: string;
  name: string;
  unitNames: { [key: string]: { abilityNames?: string[] } };
  battleTraitTypes: string[];
  armyAbilities: string[];
}

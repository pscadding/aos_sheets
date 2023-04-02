export interface UnitConfiguration {
  unitName: string;
  abilityNames: string[];
}

export interface Profile {
  id: string;
  name: string;
  units: UnitConfiguration[];
  battleTraitTypes: string[];
  armyAbilities: string[];
}

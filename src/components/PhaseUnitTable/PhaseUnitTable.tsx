import { Phase, PhaseStrings, PhaseType } from '../../models/Phase';
import { getEnumKeys } from '../../utils/enum';
import { Unit } from '../../models/Unit';
import { Ability } from '../../models/Ability';
import { HeaderBackground, Table, SubHeader } from './PhaseUnitTableStyles';
import { PhaseUnitTableUnitRow } from './PhaseUnitTableUnitRow';
import { PhaseUnitTableAbilityRow } from './PhaseUnitTableAbilityRow';

interface PhaseUnitTableProps {
  units: Unit[];
  abilities: Ability[];
}

const filterNonShownPhases = (phase: Phase) => phase !== Phase.Any && phase !== Phase.NA;

export const PhaseUnitTable = ({ units, abilities, ...props }: PhaseUnitTableProps) => {
  // Get all the phases minus the All and the NA
  const phases = getEnumKeys(Phase)
    .map((phaseKey) => Phase[phaseKey as PhaseStrings])
    .filter((phase) => filterNonShownPhases(phase));

  // The header elements are named after the phases
  const phaseComponents = phases.map((phase, index) => {
    return (
      <HeaderBackground key={index} phase={Phase[phase as PhaseStrings]}>
        {phase}
      </HeaderBackground>
    );
  });

  return (
    <Table>
      <thead>
        <tr>{phaseComponents}</tr>
      </thead>
      <tbody>
        <tr>
          <SubHeader>Used in</SubHeader>
        </tr>
        <PhaseUnitTableUnitRow phases={phases} units={units} phaseType={PhaseType.UsedIn} />
        <PhaseUnitTableAbilityRow
          phases={phases}
          abilities={abilities}
          phaseType={PhaseType.UsedIn}
        />
        <tr>
          <SubHeader>Affects</SubHeader>
        </tr>
        <PhaseUnitTableUnitRow phases={phases} units={units} phaseType={PhaseType.Affects} />
        <PhaseUnitTableAbilityRow
          phases={phases}
          abilities={abilities}
          phaseType={PhaseType.Affects}
        />
      </tbody>
    </Table>
  );
};

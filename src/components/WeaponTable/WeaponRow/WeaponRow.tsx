import { Weapon } from '../../../models/Weapon';
import { TableBodyCell } from '../../Table/Table';

interface WeaponRowProps {
  weapon: Weapon;
}

/**
 * Primary UI component for user interaction
 */
export const WeaponRow = ({ weapon }: WeaponRowProps) => {
  return (
    <tr className="WeaponTable" id={weapon.name}>
      <TableBodyCell>{weapon.name}</TableBodyCell>
      <TableBodyCell>{weapon.range}</TableBodyCell>
      <TableBodyCell>{weapon.attacks}</TableBodyCell>
      <TableBodyCell>{weapon.toHit}</TableBodyCell>
      <TableBodyCell>{weapon.toWound}</TableBodyCell>
      <TableBodyCell>{weapon.rend ? weapon.rend : '-'}</TableBodyCell>
      <TableBodyCell>{weapon.damage}</TableBodyCell>
    </tr>
  );
};

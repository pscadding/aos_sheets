import { Weapon, WeaponType } from '../../models/Weapon';
import { WeaponRow } from './WeaponRow/WeaponRow';
import { AppStyle } from '../../styles/style';
import styled from 'styled-components';
import { Table, TableHeaderCell, TableHeaderRow } from '../Table/Table';

interface WeaponTypeTableProps {
  weapons: Weapon[];
}

/**
 * Primary UI component for user interaction
 */
export const WeaponTypeTable = ({ weapons, ...props }: WeaponTypeTableProps) => {
  const rows = weapons.map((weapon: Weapon, index) => {
    return <WeaponRow key={index} weapon={weapon}></WeaponRow>;
  });

  const typeName =
    weapons.length && weapons[0].type === WeaponType.Melee ? 'Melee Weapons' : 'Missile Weapons';

  return (
    <div className="WeaponTable">
      <Table>
        <tbody>
          <TableHeaderRow>
            <TableHeaderCell className="name">{typeName}</TableHeaderCell>
            <TableHeaderCell>Range</TableHeaderCell>
            <TableHeaderCell>Attacks</TableHeaderCell>
            <TableHeaderCell>To Hit</TableHeaderCell>
            <TableHeaderCell>To Wound</TableHeaderCell>
            <TableHeaderCell>Rend</TableHeaderCell>
            <TableHeaderCell>Damage</TableHeaderCell>
          </TableHeaderRow>
          {rows}
        </tbody>
      </Table>
    </div>
  );
};

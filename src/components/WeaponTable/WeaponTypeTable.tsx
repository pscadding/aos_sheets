import { Weapon, WeaponType } from '../../models/Weapon';
import { WeaponRow } from './WeaponRow/WeaponRow';
import { AppStyle } from '../../styles/style';
import styled from 'styled-components';

interface WeaponTypeTableProps {
  weapons: Weapon[];
}

const TableHeader = styled.th`
  padding-top: ${AppStyle.spacing.xSmall};
  padding-bottom: ${AppStyle.spacing.xSmall};
  padding-left: ${AppStyle.spacing.medium};
  padding-right: ${AppStyle.spacing.medium};
  white-space: nowrap;

  &.name {
    width: 100%;
  }
`;

const HeaderRow = styled.tr`
  background-color: ${AppStyle.roles.table.headerBackground};
`;
const Table = styled.table`
  border-spacing: 0px;
`;

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
          <HeaderRow>
            <TableHeader className="name">{typeName}</TableHeader>
            <TableHeader>Range</TableHeader>
            <TableHeader>Attacks</TableHeader>
            <TableHeader>To Hit</TableHeader>
            <TableHeader>To Wound</TableHeader>
            <TableHeader>Rend</TableHeader>
            <TableHeader>Damage</TableHeader>
          </HeaderRow>
          {rows}
        </tbody>
      </Table>
    </div>
  );
};

import { Weapon } from '../../models/Weapon';
import { WeaponRow } from './WeaponRow/WeaponRow';
import { AppStyle } from '../../styles/style';
import styled from 'styled-components';

interface WeaponTableProps {
  weapons: Weapon[];
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const TableHeader = styled.th`
  padding-top: ${AppStyle.spacing.xsmall};
  padding-bottom: ${AppStyle.spacing.xsmall};
  padding-left: ${AppStyle.spacing.medium};
  padding-right: ${AppStyle.spacing.medium};

  &.name {
    width: 300px;
  }
`;

const HeaderRow = styled.tr`
  border-bottom: ${AppStyle.sizes.small} solid ${AppStyle.roles.table.border};
  border-top: ${AppStyle.sizes.small} solid ${AppStyle.roles.table.border};
  background-color: ${AppStyle.roles.table.headerBackground};
`;

const Table = styled.table`
  border-bottom: ${AppStyle.sizes.small} solid ${AppStyle.roles.table.border};
  border-collapse: collapse;
  table-layout: fixed;
`;

/**
 * Primary UI component for user interaction
 */
export const WeaponTable = ({ weapons, ...props }: WeaponTableProps) => {
  const rows = weapons.map((weapon: Weapon, index) => {
    return <WeaponRow key={index} weapon={weapon}></WeaponRow>;
  });

  return (
    <div className="WeaponTable">
      <Table>
        <tbody>
          <HeaderRow>
            <TableHeader className="name">Melee Weapons</TableHeader>
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

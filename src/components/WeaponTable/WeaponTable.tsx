import { Unit } from '../../models/Unit';
import { Weapon } from '../../models/Weapon';
import { WeaponRow } from './WeaponRow/WeaponRow';
import { AppStyle } from '../../styles/style';
import styled from 'styled-components';
import './weapontable.css';

interface WeaponTableProps {
  unit: Unit;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const TableHeader = styled.th`
  border: 2px solid white;
  border-top: 0;
  border-bottom: 0;
`;

const HeaderRow = styled.tr``;

const Table = styled.table`
  border: 2px solid white;
  border-top: 0;
  border-bottom: 0;
  border-collapse: collapse;
`;

/**
 * Primary UI component for user interaction
 */
export const WeaponTable = ({ unit, ...props }: WeaponTableProps) => {
  const rows = unit.weapons.map((weapon: Weapon, index) => {
    return <WeaponRow key={index} weapon={weapon}></WeaponRow>;
  });

  return (
    <div className="WeaponTable">
      <Table>
        <HeaderRow>
          <TableHeader>Melee Weapons</TableHeader>
          <TableHeader>Range</TableHeader>
          <TableHeader>Attacks</TableHeader>
          <TableHeader>To Hit</TableHeader>
          <TableHeader>To Wound</TableHeader>
          <TableHeader>Rend</TableHeader>
          <TableHeader>Damage</TableHeader>
        </HeaderRow>
        {rows}
      </Table>
    </div>
  );
};

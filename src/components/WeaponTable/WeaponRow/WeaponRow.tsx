import { Weapon } from '../../../models/Weapon';
import styled from 'styled-components';
import { AppStyle } from '../../../styles/style';

interface WeaponRowProps {
  weapon: Weapon;
}

const Cell = styled.td`
  padding: ${AppStyle.spacing.xxsmall};
  text-align: center;
`;

/**
 * Primary UI component for user interaction
 */
export const WeaponRow = ({ weapon }: WeaponRowProps) => {
  return (
    <tr className="WeaponTable" id={weapon.name}>
      <Cell>{weapon.name}</Cell>
      <Cell>{weapon.range}</Cell>
      <Cell>{weapon.attacks}</Cell>
      <Cell>{weapon.toHit}</Cell>
      <Cell>{weapon.toWound}</Cell>
      <Cell>{weapon.rend ? weapon.rend : '-'}</Cell>
      <Cell>{weapon.damage}</Cell>
    </tr>
  );
};

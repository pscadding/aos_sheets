import { Weapon, WeaponType } from '../../models/Weapon';
import { WeaponRow } from './WeaponRow/WeaponRow';
import { AppStyle } from '../../styles/style';
import styled from 'styled-components';
import { WeaponTypeTable } from './WeaponTypeTable';

interface WeaponsTableProps {
  weapons: Weapon[];
}

/**
 * Primary UI component for user interaction
 */
export const WeaponsTable = ({ weapons, ...props }: WeaponsTableProps) => {
  const meleeWeapons = weapons.filter((weapon) => weapon.type === WeaponType.Melee);
  const missileWeapons = weapons.filter((weapon) => weapon.type === WeaponType.Missile);

  const tables = [];

  if (missileWeapons.length) {
    tables.push(
      <WeaponTypeTable key="missileWeaponsTable" weapons={missileWeapons}></WeaponTypeTable>
    );
  }

  if (meleeWeapons.length) {
    tables.push(<WeaponTypeTable key="meleeWeaponsTable" weapons={meleeWeapons}></WeaponTypeTable>);
  }

  return <div>{tables}</div>;
};

WeaponsTable.defaultProps = {
  weapons: []
};

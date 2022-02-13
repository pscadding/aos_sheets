import React from 'react';
import { Unit } from '../../models/Unit';
import styled, { css } from 'styled-components';
import { WeaponTable } from '../WeaponTable/WeaponTable';
import { UnitName } from '../UnitName/UnitName';
import { UnitStatCircle } from '../UnitStatCircle/UnitStatCircle';
import { AppStyle } from '../../styles/style';
import { Keywords } from '../Keywords/Keywords';

export enum direction {
  vertical,
  horizontal
}

interface ContainerProps {
  direction?: direction;
  spacing?: string;
  children: React.ReactNode;
}

const ContainerStyle = styled.div`
  ${(props: { direction?: direction; spacing?: string }) => {
    let spacing = '';
    if (props.direction !== direction.vertical) {
      spacing = `        
      & > * {
        margin-left: ${props.spacing};
      }
  
      & > :first-child {
        margin-left: 0px;
      }
      `;
    }

    return css`
      display: flex;
      flex-direction: ${(props: { direction?: direction }) =>
        props.direction === direction.vertical ? 'column' : 'row'};
      ${spacing}
    `;
  }}
`;

/**
 * Primary UI component for user interaction
 */
export const Container = ({ spacing, direction, ...props }: ContainerProps) => {
  return (
    <ContainerStyle className="Container" spacing={spacing} direction={direction}>
      {props.children}
    </ContainerStyle>
  );
};

Container.defaultProps = {
  direction: direction.horizontal
};

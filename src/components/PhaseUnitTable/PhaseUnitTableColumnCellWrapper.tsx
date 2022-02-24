import { AppStyle } from '../../styles/style';
import { Phase } from '../../models/Phase';
import { Container, direction } from '../Container/Container';
import { Column } from './PhaseUnitTableStyles';
import React from 'react';

interface PhaseUnitTableColumnCellWrapperProps {
  phase: Phase;
  children: React.ReactNode;
}

export function PhaseUnitTableColumnCellWrapper({
  phase,
  children,
  ...props
}: PhaseUnitTableColumnCellWrapperProps) {
  return (
    <Column phase={phase}>
      <div>
        <Container direction={direction.vertical} spacing={AppStyle.spacing.small}>
          {children}
        </Container>
      </div>
    </Column>
  );
}

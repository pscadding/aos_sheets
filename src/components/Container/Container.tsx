import React from 'react';
import styled, { css } from 'styled-components';
import { AppStyle } from '../../styles/style';

export enum direction {
  vertical,
  horizontal
}

interface ContainerStyleProps {
  direction?: direction;
  spacing?: string;
  columns?: number;
  columnGap?: string;
}

interface ContainerProps extends ContainerStyleProps {
  children: React.ReactNode;
}

const ContainerStyle = styled.div`
  ${(props: ContainerStyleProps) => {
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
    } else {
      spacing = `        
      & > * {
        margin-top: ${props.spacing};
      }
  
      & > :first-child {
        margin-top: 0px;
      }
      `;
    }

    let layout = `
    display: flex;
    flex-direction: ${props.direction === direction.vertical ? 'column' : 'row'};
    `;

    if (props.columns !== null) {
      layout = `column-count: ${props.columns};`;
      if (props.columnGap !== null) {
        layout += `column-gap: ${props.columnGap};`;
      }
    }

    return css`
      ${layout}
      ${spacing}
    `;
  }}
`;

/**
 * Primary UI component for user interaction
 */
export const Container = ({ spacing, direction, columns, columnGap, ...props }: ContainerProps) => {
  return (
    <ContainerStyle
      className="Container"
      spacing={spacing}
      direction={direction}
      columns={columns}
      columnGap={columnGap}>
      {props.children}
    </ContainerStyle>
  );
};

Container.defaultProps = {
  direction: direction.horizontal,
  spacing: '0px',
  columns: null,
  columnGap: null
};

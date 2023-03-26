import React from 'react';
import styled, { css } from 'styled-components';

export enum direction {
  vertical,
  horizontal
}

interface ContainerStyleProps {
  direction?: direction;
  spacing?: string;
  columns?: number;
  columnGap?: string;
  alignItems?: 'center' | 'stretch' | 'baseline';
  justifyContent?: 'center' | 'space-between' | 'unset';
}

interface ContainerProps extends ContainerStyleProps {
  children: React.ReactNode;
}

const ContainerStyle = styled.div`
  ${(props: ContainerStyleProps) => {
    let layout = `
    display: flex;
    flex-direction: ${props.direction === direction.vertical ? 'column' : 'row'};
    align-items: ${props.alignItems ? props.alignItems : 'stretch'};
    justify-content: ${props.justifyContent ? props.justifyContent : 'unset'};
    `;

    if (props.columns != null) {
      layout = `column-count: ${props.columns};`;
    }

    const gap = props.spacing
      ? props.direction === direction.vertical
        ? props.columnGap != null
          ? `0 ${props.columnGap}`
          : `${props.spacing} 0`
        : `0 ${props.spacing}`
      : '';

    return css`
      ${layout}
      gap: ${gap}
    `;
  }}
`;

/**
 * Primary UI component for user interaction
 */
export const Container = ({
  spacing,
  direction,
  columns,
  columnGap,
  alignItems,
  justifyContent,
  ...props
}: ContainerProps) => {
  return (
    <ContainerStyle
      className="Container"
      spacing={spacing}
      direction={direction}
      columns={columns}
      columnGap={columnGap}
      alignItems={alignItems}
      justifyContent={justifyContent}>
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

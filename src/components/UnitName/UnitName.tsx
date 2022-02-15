import styled from 'styled-components';
import { AppStyle } from '../../styles/style';

interface UnitNameProps {
  name: string;
  subName?: string;
}

const Container = styled.div`
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  background-color: ${AppStyle.roles.panel.light.background};
  height: 3em;
`;

const Name = styled.h1`
  margin: ${AppStyle.spacing.xSmall};
  white-space: nowrap;
  font-size: 130%;
`;

const SubName = styled.h6`
  margin: ${AppStyle.spacing.xSmall};
  white-space: nowrap;
  font-size: 80%;
`;

/**
 * Primary UI component for user interaction
 */
export const UnitName = ({ name, subName, ...props }: UnitNameProps) => {
  return (
    <Container className="UnitName">
      <Name>{name}</Name>
      <SubName>{subName}</SubName>
    </Container>
  );
};

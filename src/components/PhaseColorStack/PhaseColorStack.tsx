import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Container, direction } from '../Container/Container';
import { Phase } from '../../models/Phase';
import { getPhaseColor } from '../../utils/phase';

interface PhaseColorStackProps {
  phases: Phase[];
  width?: string;
}

const StackItem = styled.div`
  background-color: ${(props: { phase: Phase; width: string }) => getPhaseColor(props.phase)};
  width: ${(props: { phase: Phase; width?: string }) => props.width};
  height: 100%;
`;

/**
 * Primary UI component for user interaction
 */
export const PhaseColorStack = ({ phases, width, ...props }: PhaseColorStackProps) => {
  console.log(width);

  const phaseStackComponents = phases.map((phase, index) => (
    <StackItem key={index} phase={phase} width={width ? width : AppStyle.sizes.medium} />
  ));

  return <Container direction={direction.vertical}>{phaseStackComponents}</Container>;
};

import styled from 'styled-components';
import { Container, direction } from '../Container/Container';
import { Phase } from '../../models/Phase';
import { getPhaseColor } from '../../utils/phase';
import { hexToRGB } from '../../utils/color';

interface PhaseColorStackProps {
  phases: Phase[];
  width: string;
}

const StackItem = styled.div`
  background-color: ${(props: { phase: Phase; width: string }) => getPhaseColor(props.phase)};
  width: ${(props: { phase: Phase; width?: string }) => props.width};
  height: 100%;
`;

const StackItemAny = styled(StackItem)`
  background: linear-gradient(
    180deg,
    ${hexToRGB(getPhaseColor(Phase.Hero))} 0%,
    ${hexToRGB(getPhaseColor(Phase.Movement))} 20%,
    ${hexToRGB(getPhaseColor(Phase.Shooting))} 40%,
    ${hexToRGB(getPhaseColor(Phase.Charge))} 60%,
    ${hexToRGB(getPhaseColor(Phase.Combat))} 80%,
    ${hexToRGB(getPhaseColor(Phase.Battleshock))} 100%
  );
`;

/**
 * Primary UI component for user interaction
 */
export const PhaseColorStack = ({ phases, width, ...props }: PhaseColorStackProps) => {
  const phaseStackComponents = phases.map((phase, index) => {
    if (phase === Phase.Any) {
      return <StackItemAny key={index} phase={phase} width={width} />;
    } else {
      return <StackItem key={index} phase={phase} width={width} />;
    }
  });

  return <Container direction={direction.vertical}>{phaseStackComponents}</Container>;
};

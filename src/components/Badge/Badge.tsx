import styled from 'styled-components';
import { AppStyle } from '../../styles/style';

interface BadgeProps {
  label: string;
  color: string;
}

const BadgeContainer = styled.div`
  background-color: ${(props: { color: string }) => props.color};
  border-radius: ${AppStyle.sizes.medium};
  padding: ${AppStyle.sizes.small};
`;

/**
 * Primary UI component for user interaction
 */
export const Badge = ({ label, color, ...props }: BadgeProps) => {
  return (
    <BadgeContainer color={color}>
      <b>{label.toUpperCase()}</b>
    </BadgeContainer>
  );
};

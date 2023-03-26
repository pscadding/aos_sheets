import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Container, direction } from '../Container/Container';

interface UserProfileProps {
  userName?: string;
  onLogout: () => void;
}

const Name = styled.h1`
  margin: ${AppStyle.spacing.xSmall};
  white-space: nowrap;
  font-size: 130%;
`;

/**
 * Primary UI component for user interaction
 */
export const UserProfile = ({ userName, onLogout, ...props }: UserProfileProps) => {
  return (
    <Container direction={direction.horizontal}>
      <Name>{userName}</Name>
      <button className="dropdown-item" onClick={() => onLogout()}>
        Logout
      </button>
    </Container>
  );
};

import { useCurrentUser } from 'thin-backend-react';
import { UserProfile } from '../../components/UserProfile/UserProfile';
import { logout } from 'thin-backend';

/**
 * User profile connected to the Thin backend
 */
export const ThinUserProfile = ({ ...props }) => {
  const user = useCurrentUser();

  return <UserProfile userName={user?.email} onLogout={logout}></UserProfile>;
};

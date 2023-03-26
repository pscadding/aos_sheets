import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Header } from './app_components/pages/Header/HeaderPage';
import { ThinBackend } from 'thin-backend-react';
import { logout } from 'thin-backend';

export default function App() {
  let navigate = useNavigate();

  const onLoadProfile = (profileName: string): void => {
    navigate(`/summary/${profileName}`);
  };

  return (
    <div>
      <ThinBackend requireLogin>
        <Header onLoadProfile={onLoadProfile} onLogout={logout} />
        <Outlet />
      </ThinBackend>
    </div>
  );
}

// This needs to be run before any calls to `query`, `createRecord`, etc.

import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { PickArmyProfilePage } from './components/Pages/PickArmyProfilePage/PickArmyProfilePage';

export default function App() {
  let navigate = useNavigate();

  const onLoadProfile = (profileName: string): void => {
    navigate(`/summary/${profileName}`);
  };

  return (
    <div>
      <PickArmyProfilePage onLoadProfile={onLoadProfile} />
      <Outlet />
    </div>
  );
}

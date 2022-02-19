import { Outlet } from 'react-router-dom';
import { PickArmyProfilePage } from './components/Pages/PickArmyProfilePage/PickArmyProfilePage';

export default function App() {
  return (
    <div>
      <PickArmyProfilePage />
      <Outlet />
    </div>
  );
}

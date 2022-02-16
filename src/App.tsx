import { Link, Outlet } from 'react-router-dom';
import { PickArmyProfilePage } from './components/Pages/PickArmyProfilePage/PickArmyProfilePage';

export default function App() {
  return (
    <div>
      <PickArmyProfilePage armyProfileNames={['army1', 'army2']} />
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}>
        <Link to="/summary">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

import { ArmySummaryPageMemo } from '../components/Pages/ArmySummaryPage/ArmySummaryPage';
import { useParams } from 'react-router-dom';

export default function ArmyProfileSummary() {
  let params = useParams();

  const profileName = params.armyId == null ? '' : params.armyId;
  console.log('Showing army profile', profileName);

  return (
    <main style={{ padding: '1rem 0' }}>
      <ArmySummaryPageMemo profileName={profileName} />
    </main>
  );
}

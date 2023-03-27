import { ArmySummaryPageMemo } from '../app_components/pages/ArmySummaryPage/ArmySummaryPage';
import { useParams } from 'react-router-dom';

export default function ArmyProfileSummary() {
  let params = useParams();

  const profileId = params.armyId == null ? '' : params.armyId;
  console.log('Showing army profile', profileId);

  return (
    <main style={{ padding: '1rem 0' }}>
      <ArmySummaryPageMemo profileId={profileId} />
    </main>
  );
}

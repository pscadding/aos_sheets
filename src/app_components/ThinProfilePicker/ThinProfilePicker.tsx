import { useState, useCallback, memo } from 'react';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import { ProfilePicker } from '../../components/ProfilePicker/ProfilePicker';

/**
 * User profile connected to the Thin backend
 */
export const ThinProfilePicker = ({ ...props }) => {
  // const [profileNames, setProfileNames] = useState<string[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const armyProfiles = useQuery(query('army_profiles').orderByDesc('createdAt'));
  console.log('armyProfiles', armyProfiles);

  const onSelectedArmyChange = useCallback((armyName: string): void => {
    setSelectedProfile(armyName);
  }, []);
  let profileNames: string[] = [];

  if (armyProfiles !== null) {
    profileNames = armyProfiles.map((p) => p.name);
    // setSelectedProfile(profileNames[0]);
  }

  const MemoizedProfilePicker = memo(ProfilePicker);

  return (
    <MemoizedProfilePicker armyProfileNames={profileNames} onArmySelected={onSelectedArmyChange} />
  );
};

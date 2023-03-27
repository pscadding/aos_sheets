import { useState, useCallback, useEffect, memo } from 'react';
import { ArmyProfile, query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import { ProfilePicker } from '../../components/ProfilePicker/ProfilePicker';

/**
 * Army profiles selector populated by data from to the Thin backend
 */
export const ThinProfilePicker = ({ ...props }) => {
  const [profileNames, setProfileNames] = useState<ArmyProfile[]>([]);
  const armyProfiles = useQuery(query('army_profiles').orderByDesc('createdAt'));

  useEffect(() => {
    if (armyProfiles != null) {
      setProfileNames(armyProfiles);
    }
  }, [armyProfiles]);

  return <ProfilePicker armyProfiles={profileNames} {...props} />;
};

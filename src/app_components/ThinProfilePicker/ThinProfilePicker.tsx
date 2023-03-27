import { useState, useCallback, useEffect, memo } from 'react';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import { ProfilePicker } from '../../components/ProfilePicker/ProfilePicker';

/**
 * Army profiles selector populated by data from to the Thin backend
 */
export const ThinProfilePicker = ({ ...props }) => {
  const [profileNames, setProfileNames] = useState<string[]>([]);

  const armyProfiles = useQuery(query('army_profiles').orderByDesc('createdAt'));

  if (armyProfiles != null) {
    const newValues = armyProfiles.map((p) => p.name);
    setProfileNames((prevState) => {
      if (newValues === prevState) {
        return prevState;
      } else {
        return newValues;
      }
    });
  }

  return <ProfilePicker armyProfileNames={profileNames} {...props} />;
};

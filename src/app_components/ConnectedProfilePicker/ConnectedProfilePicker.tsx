import { useState, useEffect, memo } from 'react';
import { ProfilePicker } from '../../components/ProfilePicker/ProfilePicker';
import { loadProfiles } from '../../data/DataLoader';
import { Profile } from '../../models/Profile';

/**
 * Army profiles selector populated by data from to the Thin backend
 */
export const ConnectedProfilePicker = ({ ...props }) => {
  const [profileNames, setProfileNames] = useState<Profile[] | null>(null);

  useEffect(() => {
    if (profileNames === null) {
      loadProfiles().then((armyProfiles) => {
        if (armyProfiles != null) {
          setProfileNames(armyProfiles);
        }
      });
    }
  });

  return <ProfilePicker armyProfiles={profileNames ? profileNames : []} {...props} />;
};

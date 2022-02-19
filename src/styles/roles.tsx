import { colors } from './colors';

export const roleColor = {
  general: {
    border: colors.darkSky
  },
  table: {
    dark: {
      color: colors.boneWhite
    },
    headerBackground: colors.overcastSky
  },
  panel: {
    dark: {
      background: colors.darkSky,
      color: colors.boneWhite
    },
    light: {
      background: colors.transparent,
      color: colors.darkSky
    }
  },
  abilities: {
    background: {
      spells: colors.lavender,
      ability: colors.boneWhite,
      battleTrait: colors.apricot,
      other: colors.transparent
    }
  },
  phases: {
    background: {
      hero: colors.celadon,
      movement: colors.middleBlue,
      shooting: colors.maximumBlue,
      charge: colors.shadowBlue,
      combat: colors.blueBell,
      battleshock: colors.kobi,
      na: colors.transparent,
      any: colors.transparent
    }
  }
};

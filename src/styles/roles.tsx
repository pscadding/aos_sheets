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
      spells: colors.boneWhite,
      ability: colors.boneWhite,
      battleTrait: colors.boneWhite,
      commandAbility: colors.boneWhite,
      triumph: colors.boneWhite,
      turn: colors.boneWhite,
      other: colors.transparent
    }
  },
  phases: {
    background: {
      hero: colors.melon,
      movement: colors.mindaro,
      shooting: colors.middleBlueGreen,
      charge: colors.maximumBluePurple,
      combat: colors.mauve,
      battleshock: colors.pinkLavendar,
      na: colors.transparent,
      any: colors.transparent
    }
  }
};

import { Phase } from '../models/Phase';
import { AppStyle } from '../styles/style';

export function getPhaseColor(phase: Phase): string {
  const phaseName = Phase[phase].toLowerCase() as keyof typeof AppStyle.roles.phases.background;
  return AppStyle.roles.phases.background[phaseName];
}

import styled from 'styled-components';
import { AppStyle } from '../../styles/style';
import { Phase } from '../../models/Phase';
import { getPhaseColor } from '../../utils/phase';
import { hexToRGB } from '../../utils/color';

export const HeaderBackground = styled.th`
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  background: ${(props: { phase: Phase }) => {
    const color = hexToRGB(getPhaseColor(props.phase), 0.5);
    return `linear-gradient(${color}, ${color}),
    linear-gradient(black, black);`;
  }};
  color: ${AppStyle.roles.table.dark.color};
  font-size: 160%;
`;
export const SubHeader = styled.td`
  padding-left: ${AppStyle.spacing.small};
  padding-right: ${AppStyle.spacing.small};
  font-weight: bold;
  font-size: 120%;
`;
export const Table = styled.table`
  border-top-right-radius: ${AppStyle.sizes.small};
  border-top-left-radius: ${AppStyle.sizes.small};
  border-top: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.general.border};
  border-left: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.general.border};
  border-right: ${AppStyle.sizes.xSmall} solid ${AppStyle.roles.general.border};
  border-spacing: 0px 0px;
  table-layout: fixed;
  width: 100%;
`;
export const UnitName = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 120%;
`;
export const UnitNameAbility = styled(UnitName)`
  font-weight: normal;
`;
export const Column = styled.td`
  vertical-align: top;
  background-color: ${(props: { phase: Phase }) => getPhaseColor(props.phase)};
  border-top: ${AppStyle.sizes.xxSmall} solid ${AppStyle.roles.general.border};
`;

import { Color } from '../Core/Color';

export enum AgentBadgeContentType {
  TotalNumberOfActions = 'TOTAL_NUMBER_OF_ACTIONS',
  TotalNumberOfScenarios = 'TOTAL_NUMBER_OF_SCENARIOS',
  TotalNumberOfActionTypes = 'TOTAL_NUMBER_OF_ACTION_TYPES'
}

export interface AgentSettings {
  frameScale: number;
  badgeColor: Color;
  overlayColor: Color;
  badgeContentType: AgentBadgeContentType;
}

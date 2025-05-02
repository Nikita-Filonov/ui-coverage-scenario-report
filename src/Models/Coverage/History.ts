import { ActionType } from '../Core/Actions';

export interface ActionHistory {
  count: number;
  actionType: ActionType;
}

export interface ScenarioHistory {
  actions: ActionHistory[];
  createdAt: string;
}

export interface AppHistory {
  actions: ActionHistory[];
  createdAt: string;
  totalActions: number;
  totalElements: number;
}

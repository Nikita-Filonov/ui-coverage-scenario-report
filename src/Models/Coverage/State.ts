import { ActionCoverage, ActionType } from '../Core/Actions';
import { AppHistory, ScenarioHistory } from './History';
import { SelectorType } from '../Core/Selector';

export interface ScenarioCoverageStep {
  selector: string;
  timestamp: number;
  actionType: ActionType;
  selectorType: SelectorType;
}

export interface ScenarioCoverage {
  url: string | null;
  name: string;
  steps: ScenarioCoverageStep[];
  actions: ActionCoverage[];
  history: ScenarioHistory[];
}

export interface AppCoverageState {
  history: AppHistory[];
  scenarios: ScenarioCoverage[];
}

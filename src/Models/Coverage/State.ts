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

export interface PageCoverageNode {
  url: string;
  page: string;
  priority: number;
  scenarios: string[];
}

export interface PageCoverageEdge {
  count: number;
  toPage: string;
  fromPage: string;
  scenarios: string[];
}

export interface PagesCoverage {
  nodes: PageCoverageNode[];
  edges: PageCoverageEdge[];
}

export interface AppCoverageState {
  pages: PagesCoverage;
  history: AppHistory[];
  scenarios: ScenarioCoverage[];
}

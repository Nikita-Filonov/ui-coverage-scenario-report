import { ActionCoverage, ActionType } from '../Core/Actions';
import { SelectorType } from '../Core/Selector';

export interface AgentElementCoverage {
  actions: ActionCoverage[];
  selector: string;
  scenarios: string[];
  selectorType: SelectorType;
}

export interface AgentElementHighlight {
  selector: string;
  actionType: ActionType;
  selectorType: SelectorType;
}

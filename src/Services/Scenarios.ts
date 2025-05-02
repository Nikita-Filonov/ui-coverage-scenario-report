import { ScenarioCoverageStep } from '../Models/Coverage/State';
import { ScenarioStepsFilters } from '../Models/Coverage/Filters';

type FilterScenarioStepsProps = {
  steps: ScenarioCoverageStep[];
  search: string;
  filters: ScenarioStepsFilters;
};

export const sortScenarioSteps = (a: ScenarioCoverageStep, b: ScenarioCoverageStep) => a.timestamp - b.timestamp;

export const filterScenarioSteps = ({ steps, search, filters }: FilterScenarioStepsProps) => {
  return steps.filter(
    (step) =>
      step.selector.toLowerCase().includes(search.toLowerCase()) &&
      filters.actions.includes(step.actionType) &&
      filters.selectorTypes.includes(step.selectorType)
  );
};

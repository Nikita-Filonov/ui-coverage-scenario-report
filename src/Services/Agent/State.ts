import { ScenarioCoverage } from '../../Models/Coverage/State';
import { AgentElementCoverage } from '../../Models/Agent/Element';
import { useMemo } from 'react';
import { useInitialState } from '../../Providers/Core/InitialStateProvider';
import { AgentState } from '../../Models/Agent/State';
import { useAgentSettings } from '../../Providers/Agent/AgentSettingsProvider';
import { useTheme } from '../../Providers/Core/ThemeProvider';
import { useAgentFilters } from '../../Providers/Agent/AgentFiltersProvider';
import { ActionType } from '../../Models/Core/Actions';
import { SelectorType } from '../../Models/Core/Selector';
import { useAgentControls } from '../../Providers/Agent/AgentControlsProvider';

type BuildAgentElementCoverageProps = {
  scenarios: ScenarioCoverage[];
};

type FilterAgentCoverageByActionsProps = {
  actions: ActionType[];
  elements: AgentElementCoverage[];
};

type FilterAgentElementCoverageBySelectorTypesProps = {
  elements: AgentElementCoverage[];
  selectorTypes: SelectorType[];
};

const buildAgentElementCoverage = (props: BuildAgentElementCoverageProps): AgentElementCoverage[] => {
  const { scenarios } = props;
  const elementsMap = new Map<string, AgentElementCoverage>();

  for (const scenario of scenarios) {
    for (const step of scenario.steps) {
      const key = `${step.selectorType}::${step.selector}`;

      let element = elementsMap.get(key);
      if (!element) {
        element = {
          selector: step.selector,
          selectorType: step.selectorType,
          actions: [],
          scenarios: []
        };
        elementsMap.set(key, element);
      }

      // Инкремент action count
      const action = element.actions.find((a) => a.actionType === step.actionType);
      if (action) {
        action.count += 1;
      } else {
        element.actions.push({ actionType: step.actionType, count: 1 });
      }

      // Добавить сценарий, если еще не добавлен
      if (!element.scenarios.includes(scenario.name)) {
        element.scenarios.push(scenario.name);
      }
    }
  }

  return Array.from(elementsMap.values());
};

const filterAgentElementCoverageByActions = (props: FilterAgentCoverageByActionsProps): AgentElementCoverage[] => {
  const { actions, elements } = props;

  return elements
    .map((element) => ({
      ...element,
      actions: element.actions.filter((action) => actions.includes(action.actionType))
    }))
    .filter((element) => element.actions.length > 0);
};

const filterAgentElementCoverageBySelectorTypes = (
  props: FilterAgentElementCoverageBySelectorTypesProps
): AgentElementCoverage[] => {
  const { elements, selectorTypes } = props;

  return elements.filter((element) => selectorTypes.includes(element.selectorType));
};

export const useAgentStateBuilder = () => {
  const { state } = useInitialState();
  const { themeMode } = useTheme();
  const { filters } = useAgentFilters();
  const { settings } = useAgentSettings();
  const { elementHighlight, selectedScenarios } = useAgentControls();

  const buildState = (): AgentState => {
    const scenarios = state.scenarios.filter((scenario) => selectedScenarios.includes(scenario.name));

    let elements = buildAgentElementCoverage({ scenarios });
    elements = filterAgentElementCoverageByActions({ elements, actions: filters.actions });
    elements = filterAgentElementCoverageBySelectorTypes({ elements, selectorTypes: filters.selectorTypes });

    return { settings, elements, themeMode, scenarios: state.scenarios, elementHighlight };
  };

  const agentState: AgentState = useMemo(buildState, [
    filters,
    settings,
    themeMode,
    elementHighlight,
    selectedScenarios
  ]);

  const emptyAgentState: AgentState = useMemo(
    () => ({ settings, elements: [], themeMode, scenarios: [], elementHighlight: null }),
    [settings, themeMode]
  );

  return { agentState, emptyAgentState };
};

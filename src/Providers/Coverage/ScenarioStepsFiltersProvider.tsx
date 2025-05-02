import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { AgentFilters } from '../../Models/Agent/Filters';
import { ActionType } from '../../Models/Core/Actions';
import { loadFromStorage, saveIntoStorage, StorageKey } from '../../Services/Storage';
import { SelectorType } from '../../Models/Core/Selector';
import { ScenarioStepsFilters } from '../../Models/Coverage/Filters';

const DEFAULT_SCENARIO_STEPS_FILTERS: ScenarioStepsFilters = {
  actions: Object.values(ActionType),
  selectorTypes: Object.values(SelectorType)
};

export type ScenarioStepsFiltersContextProps = {
  filters: AgentFilters;
  setFilters: (filters: AgentFilters) => void;
  clearAllFilters: () => void;
};

const ScenarioStepsFiltersContext = createContext<ScenarioStepsFiltersContextProps | null>(null);

const ScenarioStepsFiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFiltersInternal] = useState<AgentFilters>(
    loadFromStorage({ key: StorageKey.ScenarioStepsFilters, fallback: DEFAULT_SCENARIO_STEPS_FILTERS })
  );

  const setFilters = (filters: AgentFilters) => {
    setFiltersInternal(filters);
    saveIntoStorage({ key: StorageKey.ScenarioStepsFilters, data: filters });
  };

  const clearAllFilters = () => setFilters(DEFAULT_SCENARIO_STEPS_FILTERS);

  return (
    <ScenarioStepsFiltersContext.Provider value={{ filters, setFilters, clearAllFilters }}>
      {children}
    </ScenarioStepsFiltersContext.Provider>
  );
};

const useScenarioStepsFilters = () => {
  const event = useContext(ScenarioStepsFiltersContext);
  if (event == null) {
    throw new Error('useScenarioStepsFilters() called outside of a ScenarioStepsFiltersProvider?');
  }
  return event;
};

export { ScenarioStepsFiltersProvider, useScenarioStepsFilters };

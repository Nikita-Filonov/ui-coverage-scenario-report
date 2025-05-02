import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { AgentFilters } from '../../Models/Agent/Filters';
import { ActionType } from '../../Models/Core/Actions';
import { loadFromStorage, saveIntoStorage, StorageKey } from '../../Services/Storage';
import { SelectorType } from '../../Models/Core/Selector';

const DEFAULT_AGENT_FILTERS: AgentFilters = {
  actions: Object.values(ActionType),
  selectorTypes: Object.values(SelectorType)
};

export type AgentFiltersContextProps = {
  filters: AgentFilters;
  setFilters: (filters: AgentFilters) => void;
  clearAllFilters: () => void;
};

const AgentFiltersContext = createContext<AgentFiltersContextProps | null>(null);

const AgentFiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFiltersInternal] = useState<AgentFilters>(
    loadFromStorage({ key: StorageKey.AgentFilters, fallback: DEFAULT_AGENT_FILTERS })
  );

  const setFilters = (filters: AgentFilters) => {
    setFiltersInternal(filters);
    saveIntoStorage({ key: StorageKey.AgentFilters, data: filters });
  };

  const clearAllFilters = () => setFilters(DEFAULT_AGENT_FILTERS);

  return (
    <AgentFiltersContext.Provider value={{ filters, setFilters, clearAllFilters }}>
      {children}
    </AgentFiltersContext.Provider>
  );
};

const useAgentFilters = () => {
  const event = useContext(AgentFiltersContext);
  if (event == null) {
    throw new Error('useAgentFilters() called outside of a AgentFiltersProvider?');
  }
  return event;
};

export { AgentFiltersProvider, useAgentFilters };

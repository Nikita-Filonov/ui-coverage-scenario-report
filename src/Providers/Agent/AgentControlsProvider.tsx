import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import { AgentElementHighlight } from '../../Models/Agent/Element';
import { useInitialState } from '../Core/InitialStateProvider';

export type AgentControlsContextProps = {
  elementHighlight: AgentElementHighlight | null;
  setElementHighlight: (element: AgentElementHighlight | null) => void;
  selectedScenarios: string[];
  isAllScenariosSelected: boolean;
  setSelectedScenarios: (scenarios: string[]) => void;
  onSelectScenario: (scenario: string) => void;
  onSelectAllScenarios: () => void;
  onDeselectAllScenarios: () => void;
};

const AgentControlsContext = createContext<AgentControlsContextProps | null>(null);

const AgentControlsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { state } = useInitialState();
  const [elementHighlight, setElementHighlight] = useState<AgentElementHighlight | null>(null);
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>([]);

  useEffect(() => {
    if (state.scenarios.length > 0) {
      setSelectedScenarios(state.scenarios.map((scenario) => scenario.name));
    }
  }, [state.scenarios.length]);

  const isAllScenariosSelected = useMemo(
    () => selectedScenarios.length === state.scenarios.length,
    [selectedScenarios.length, state.scenarios.length]
  );

  const onSelectScenario = (scenario: string) => {
    setSelectedScenarios(
      selectedScenarios.includes(scenario)
        ? selectedScenarios.filter((s) => s !== scenario)
        : [...selectedScenarios, scenario]
    );
  };

  const onSelectAllScenarios = () => setSelectedScenarios(state.scenarios.map((scenario) => scenario.name));

  const onDeselectAllScenarios = () => setSelectedScenarios([]);

  return (
    <AgentControlsContext.Provider
      value={{
        elementHighlight,
        setElementHighlight,
        selectedScenarios,
        isAllScenariosSelected,
        setSelectedScenarios,
        onSelectScenario,
        onSelectAllScenarios,
        onDeselectAllScenarios
      }}>
      {children}
    </AgentControlsContext.Provider>
  );
};

const useAgentControls = () => {
  const event = useContext(AgentControlsContext);
  if (event == null) {
    throw new Error('useAgentControls() called outside of a AgentControlsProvider?');
  }
  return event;
};

export { AgentControlsProvider, useAgentControls };

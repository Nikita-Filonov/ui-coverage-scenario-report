import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { AppConfig } from '../../Models/Config';
import { AppCoverageState } from '../../Models/Coverage/State';
import { InitialState } from '../../Models/InitialState';

const DEFAULT_APP_CONFIG: AppConfig = {
  key: '',
  url: '',
  name: '',
  tags: [],
  repository: null
};

const DEFAULT_APP_COVERAGE_STATE: AppCoverageState = {
  history: [],
  scenarios: []
};

const DEFAULT_INITIAL_STATE: InitialState = {
  config: { apps: [] },
  createdAt: '',
  appsCoverage: {}
};

export const loadInitialState = (): InitialState => {
  const stateElement = document.getElementById('state');
  if (stateElement === null) {
    return DEFAULT_INITIAL_STATE;
  }

  try {
    return JSON.parse(stateElement.textContent || '');
  } catch {
    return DEFAULT_INITIAL_STATE;
  }
};

export type InitialStateContextProps = {
  state: AppCoverageState;
  config: AppConfig;
  configs: AppConfig[];
  setConfig: (config: AppConfig) => void;
  initialState: InitialState;
};

const InitialStateContext = createContext<InitialStateContextProps | null>(null);

const InitialStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<InitialState>(loadInitialState());
  const [config, setConfig] = useState<AppConfig>(DEFAULT_APP_CONFIG);

  useEffect(() => {
    loadState();
  }, []);

  const loadState = () => {
    const initialState = loadInitialState();
    for (const app of initialState.config.apps || []) {
      const appCoverage = initialState.appsCoverage[app.key];

      if (appCoverage.scenarios.length > 0) {
        setConfig(app);
        break;
      }
    }

    setState(initialState);
  };

  return (
    <InitialStateContext.Provider
      value={{
        state: state.appsCoverage[config.key] || DEFAULT_APP_COVERAGE_STATE,
        config,
        configs: state.config.apps || [],
        setConfig,
        initialState: state
      }}>
      {children}
    </InitialStateContext.Provider>
  );
};

const useInitialState = () => {
  const event = useContext(InitialStateContext);
  if (event == null) {
    throw new Error('useInitialState() called outside of a InitialStateProvider?');
  }
  return event;
};

export { InitialStateProvider, useInitialState };

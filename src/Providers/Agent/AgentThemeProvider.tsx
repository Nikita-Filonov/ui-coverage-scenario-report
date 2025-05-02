import { createContext, FC, PropsWithChildren } from 'react';
import { ThemeProvider as LibThemeProvider } from '@mui/material';
import { ThemeMode } from '../../Models/Core/Theme';
import { useAgentInitialState } from './AgentInitialStateProvider';
import { darkTheme, lightTheme } from '../Core/ThemeProvider';

const AgentThemeContext = createContext<null>(null);

export const AgentThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { state } = useAgentInitialState();

  return (
    <AgentThemeContext.Provider value={null}>
      <LibThemeProvider theme={state.themeMode === ThemeMode.Light ? lightTheme : darkTheme}>
        {children}
      </LibThemeProvider>
    </AgentThemeContext.Provider>
  );
};

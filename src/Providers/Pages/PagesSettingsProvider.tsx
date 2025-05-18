import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { PagesSettings } from '../../Models/Pages/Settings';
import { loadFromStorage, saveIntoStorage, StorageKey } from '../../Services/Storage';
import { DEFAULT_GRAPH_SETTINGS } from '../../Services/Graph';

const DEFAULT_PAGES_SETTINGS: PagesSettings = {
  graph: DEFAULT_GRAPH_SETTINGS
};

export type PagesSettingsProps = {
  settings: PagesSettings;
  setSettings: (settings: PagesSettings) => void;
  clearAllSettings: () => void;
};

const PagesSettingsContext = createContext<PagesSettingsProps | null>(null);

const PagesSettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [settings, setSettingsInternal] = useState<PagesSettings>(
    loadFromStorage({ key: StorageKey.PagesSettings, fallback: DEFAULT_PAGES_SETTINGS })
  );

  const setSettings = (settings: PagesSettings) => {
    setSettingsInternal(settings);
    saveIntoStorage({ key: StorageKey.PagesSettings, data: settings });
  };

  const clearAllSettings = () => setSettings(DEFAULT_PAGES_SETTINGS);

  return (
    <PagesSettingsContext.Provider value={{ settings, setSettings, clearAllSettings }}>
      {children}
    </PagesSettingsContext.Provider>
  );
};

const usePagesSettings = () => {
  const event = useContext(PagesSettingsContext);
  if (event == null) {
    throw new Error('usePagesSettings() called outside of a PagesGraphSettingsProvider?');
  }
  return event;
};

export { PagesSettingsProvider, usePagesSettings };

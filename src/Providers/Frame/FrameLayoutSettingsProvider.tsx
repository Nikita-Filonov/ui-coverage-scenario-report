import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { FrameLayoutSettings } from '../../Models/Frame/LayoutSettings';
import { loadFromStorage, saveIntoStorage, StorageKey } from '../../Services/Storage';

const DEFAULT_FRAME_LAYOUT_SETTINGS: FrameLayoutSettings = {
  showScenarios: true
};

export type FrameLayoutSettingsContextProps = {
  layoutSettings: FrameLayoutSettings;
  setLayoutSettings: (settings: FrameLayoutSettings) => void;
  onShowScenarios: () => void;
  onHideScenarios: () => void;
};

const FrameLayoutSettingsContext = createContext<FrameLayoutSettingsContextProps | null>(null);

const FrameLayoutSettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [layoutSettings, setLayoutSettingsInternal] = useState<FrameLayoutSettings>(
    loadFromStorage({ key: StorageKey.FrameLayoutSettings, fallback: DEFAULT_FRAME_LAYOUT_SETTINGS })
  );

  const setLayoutSettings = (settings: FrameLayoutSettings) => {
    setLayoutSettingsInternal(settings);
    saveIntoStorage({ key: StorageKey.FrameLayoutSettings, data: settings });
  };

  const onShowScenarios = () => setLayoutSettings({ ...layoutSettings, showScenarios: true });

  const onHideScenarios = () => setLayoutSettings({ ...layoutSettings, showScenarios: false });

  return (
    <FrameLayoutSettingsContext.Provider
      value={{ layoutSettings, setLayoutSettings, onShowScenarios, onHideScenarios }}>
      {children}
    </FrameLayoutSettingsContext.Provider>
  );
};

const useFrameLayoutSettings = () => {
  const event = useContext(FrameLayoutSettingsContext);
  if (event == null) {
    throw new Error('useFrameLayoutSettings() called outside of a FrameLayoutSettingsProvider?');
  }
  return event;
};

export { FrameLayoutSettingsProvider, useFrameLayoutSettings };

import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { Features } from '../../Models/Features';
import { loadFromStorage, saveIntoStorage, StorageKey } from '../../Services/Storage';

const DEFAULT_FEATURES: Features = {
  pagesView: true,
  frameView: true,
  configView: true,
  coverageHistoryView: true
};

export type FeaturesContextProps = {
  features: Features;
  setFeatures: (features: Features) => void;
  clearAllFeatures: () => void;
};

const FeaturesContext = createContext<FeaturesContextProps | null>(null);

const FeaturesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [features, setFeaturesInternal] = useState<Features>(
    loadFromStorage({ key: StorageKey.Features, fallback: DEFAULT_FEATURES })
  );

  const setFeatures = (features: Features) => {
    setFeaturesInternal(features);
    saveIntoStorage({ key: StorageKey.Features, data: features });
  };

  const clearAllFeatures = () => setFeatures(DEFAULT_FEATURES);

  return (
    <FeaturesContext.Provider value={{ features, setFeatures, clearAllFeatures }}>{children}</FeaturesContext.Provider>
  );
};

const useFeatures = () => {
  const event = useContext(FeaturesContext);
  if (event == null) {
    throw new Error('useFeatures() called outside of a FeaturesProvider?');
  }
  return event;
};

export { FeaturesProvider, useFeatures };

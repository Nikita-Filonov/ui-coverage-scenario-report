import { Box } from '@mui/material';
import { PagesSettings } from '../../../Models/Pages/Settings';
import { FC } from 'react';
import { GraphSettingsView } from '../../Graph/Settings/GraphSettingsView';
import { GraphSettings } from '../../../Models/Graph/Settings';

type Props = {
  settings: PagesSettings;
  setSettings: (settings: PagesSettings) => void;
};

export const PagesSettingsView: FC<Props> = ({ settings, setSettings }) => {
  const onGraphSettings = (graph: GraphSettings) => setSettings({ ...settings, graph });

  return (
    <Box>
      <GraphSettingsView settings={settings.graph} setSettings={onGraphSettings} />
    </Box>
  );
};

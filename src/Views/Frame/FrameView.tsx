import { Grid2 } from '@mui/material';
import { ScenariosLayoutView } from '../Scenarios/ScenariosLayoutView';
import { AgentLayoutView } from '../Agent/AgentLayoutView';
import { AgentSettingsProvider } from '../../Providers/Agent/AgentSettingsProvider';
import { AgentFiltersProvider } from '../../Providers/Agent/AgentFiltersProvider';
import { AgentControlsProvider } from '../../Providers/Agent/AgentControlsProvider';
import { FrameLayoutSettingsProvider, useFrameLayoutSettings } from '../../Providers/Frame/FrameLayoutSettingsProvider';

const FrameInternalView = () => {
  const { layoutSettings } = useFrameLayoutSettings();

  return (
    <Grid2 sx={{ mt: 3, mb: 1, height: 700 }} spacing={2} container>
      {layoutSettings.showScenarios && (
        <Grid2 size={{ md: 5, xs: 12 }}>
          <ScenariosLayoutView />
        </Grid2>
      )}
      <Grid2 size={{ md: layoutSettings.showScenarios ? 7 : 12, xs: 12 }}>
        <AgentLayoutView />
      </Grid2>
    </Grid2>
  );
};

export const FrameView = () => {
  return (
    <FrameLayoutSettingsProvider>
      <AgentSettingsProvider>
        <AgentFiltersProvider>
          <AgentControlsProvider>
            <FrameInternalView />
          </AgentControlsProvider>
        </AgentFiltersProvider>
      </AgentSettingsProvider>
    </FrameLayoutSettingsProvider>
  );
};

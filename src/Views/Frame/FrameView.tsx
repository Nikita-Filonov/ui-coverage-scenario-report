import { Grid2 } from '@mui/material';
import { ScenariosLayoutView } from '../Scenarios/ScenariosLayoutView';
import { AgentLayoutView } from '../Agent/AgentLayoutView';
import { AgentSettingsProvider } from '../../Providers/Agent/AgentSettingsProvider';
import { AgentFiltersProvider } from '../../Providers/Agent/AgentFiltersProvider';
import { AgentControlsProvider } from '../../Providers/Agent/AgentControlsProvider';
import { useFrameLayoutSettings } from '../../Providers/Frame/FrameLayoutSettingsProvider';

export const FrameView = () => {
  const { layoutSettings } = useFrameLayoutSettings();

  return (
    <AgentSettingsProvider>
      <AgentFiltersProvider>
        <AgentControlsProvider>
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
        </AgentControlsProvider>
      </AgentFiltersProvider>
    </AgentSettingsProvider>
  );
};

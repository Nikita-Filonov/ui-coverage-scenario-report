import { Grid2 } from '@mui/material';
import { PagesControlsProvider, usePagesControls } from '../../Providers/Pages/PagesControlsProvider';
import { PagesGraphLayoutView } from './PagesGraphLayoutView';
import { PagesSettingsProvider } from '../../Providers/Pages/PagesSettingsProvider';
import { PagesNodeDetailsView } from './Node/PagesNodeDetailsView';
import { PagesEdgeDetailsView } from './Edge/PagesEdgeDetailsView';

const PagesInternalView = () => {
  const { node, edge } = usePagesControls();

  return (
    <Grid2 sx={{ mt: 3, height: 600 }} spacing={2} container>
      {node && (
        <Grid2 size={{ md: 5, xs: 12 }}>
          <PagesNodeDetailsView />
        </Grid2>
      )}
      {edge && (
        <Grid2 size={{ md: 5, xs: 12 }}>
          <PagesEdgeDetailsView />
        </Grid2>
      )}
      <Grid2 size={{ md: node || edge ? 7 : 12, xs: 12 }}>
        <PagesGraphLayoutView />
      </Grid2>
    </Grid2>
  );
};

export const PagesView = () => {
  return (
    <PagesControlsProvider>
      <PagesSettingsProvider>
        <PagesInternalView />
      </PagesSettingsProvider>
    </PagesControlsProvider>
  );
};

import { PagesCoverageGraph } from '../../Components/Graphs/Pages/PagesCoverageGraph';
import { PagesGraphToolbarView } from '../../Components/Toolbar/Pages/PagesGraphToolbarView';
import { Box } from '@mui/material';

export const PagesGraphLayoutView = () => {
  return (
    <Box>
      <PagesGraphToolbarView />
      <PagesCoverageGraph />
    </Box>
  );
};

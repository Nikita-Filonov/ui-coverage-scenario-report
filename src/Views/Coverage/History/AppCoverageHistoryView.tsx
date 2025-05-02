import { Grid2 } from '@mui/material';
import { AppHistoryTotalElementsChartView } from '../../../Components/Charts/Coverage/History/AppHistoryTotalElementsChartView';
import { useInitialState } from '../../../Providers/Core/InitialStateProvider';
import { AppHistoryTotalActionsChartView } from '../../../Components/Charts/Coverage/History/AppHistoryTotalActionsChartView';
import { AppHistoryActionsChartView } from '../../../Components/Charts/Coverage/History/AppHistoryActionsChartView';

export const AppCoverageHistoryView = () => {
  const { state } = useInitialState();

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <AppHistoryTotalElementsChartView history={state.history} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <AppHistoryTotalActionsChartView history={state.history} />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <AppHistoryActionsChartView history={state.history} />
      </Grid2>
    </Grid2>
  );
};

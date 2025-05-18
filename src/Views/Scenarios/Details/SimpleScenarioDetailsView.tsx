import { Box } from '@mui/material';
import { ActionCoverageTable } from '../../../Components/Tables/Core/Actions/ActionCoverageTable';
import { ScenarioHistoryChartView } from '../../../Components/Charts/Coverage/History/ScenarioHistoryChartView';
import { ScenarioCoverage } from '../../../Models/Coverage/State';
import { FC } from 'react';
import { ScenarioDetailsInfoView } from './ScenarioDetailsInfoView';
import { SimpleScenarioDetailsStepsView } from './SimpleScenarioDetailsStepsView';

type Props = {
  scenario: ScenarioCoverage;
};

export const SimpleScenarioDetailsView: FC<Props> = ({ scenario }) => {
  return (
    <Box>
      <ScenarioDetailsInfoView sx={{ mt: 0 }} scenario={scenario} />
      <SimpleScenarioDetailsStepsView steps={scenario.steps} />
      <ActionCoverageTable actions={scenario.actions} />
      <ScenarioHistoryChartView history={scenario.history} />
    </Box>
  );
};

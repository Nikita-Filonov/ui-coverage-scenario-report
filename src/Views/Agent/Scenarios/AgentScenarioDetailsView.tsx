import { Box } from '@mui/material';
import { ActionCoverageTable } from '../../../Components/Tables/Core/Actions/ActionCoverageTable';
import { ScenarioHistoryChartView } from '../../../Components/Charts/Coverage/History/ScenarioHistoryChartView';
import { ScenarioCoverage } from '../../../Models/Coverage/State';
import { FC } from 'react';
import { ScenarioDetailsInfoView } from '../../Scenarios/Details/ScenarioDetailsInfoView';
import { AgentScenarioDetailsStepsView } from './AgentScenarioDetailsStepsView';

type Props = {
  scenario: ScenarioCoverage;
};

export const AgentScenarioDetailsView: FC<Props> = ({ scenario }) => {
  return (
    <Box>
      <ScenarioDetailsInfoView sx={{ mt: 0 }} scenario={scenario} />
      <AgentScenarioDetailsStepsView steps={scenario.steps} />
      <ActionCoverageTable actions={scenario.actions} />
      <ScenarioHistoryChartView history={scenario.history} />
    </Box>
  );
};

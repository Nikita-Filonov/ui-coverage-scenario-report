import { FC, useMemo } from 'react';
import { Box } from '@mui/material';
import { ActionCoverageTable } from '../../../Components/Tables/Core/Actions/ActionCoverageTable';
import { AgentElementCoverage } from '../../../Models/Agent/Element';
import { useAgentInitialState } from '../../../Providers/Agent/AgentInitialStateProvider';
import { AgentElementCoverageDetailsInfoView } from './AgentElementCoverageDetailsInfoView';
import { SimpleScenariosView } from '../../Scenarios/SimpleScenariosView';

type Props = {
  element: AgentElementCoverage;
};

export const AgentElementCoverageDetailsView: FC<Props> = ({ element }) => {
  const { state } = useAgentInitialState();

  const scenarios = useMemo(
    () => state.scenarios?.filter((scenario) => element.scenarios.includes(scenario.name)),
    [state.scenarios, element.scenarios]
  );

  return (
    <Box>
      <AgentElementCoverageDetailsInfoView element={element} />
      <ActionCoverageTable actions={element.actions} />
      <SimpleScenariosView scenarios={scenarios || []} />
    </Box>
  );
};

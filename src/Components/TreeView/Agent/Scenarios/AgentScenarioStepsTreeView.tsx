import { FC } from 'react';
import { AgentScenarioStepsTreeViewItem } from './AgentScenarioStepsTreeViewItem';
import { BaseTreeView } from '../../BaseTreeView';
import { ScenarioCoverageStep } from '../../../../Models/Coverage/State';
import { sortScenarioSteps } from '../../../../Services/Scenarios';

type Props = {
  steps: ScenarioCoverageStep[];
};

export const AgentScenarioStepsTreeView: FC<Props> = ({ steps }) => {
  return (
    <BaseTreeView sx={{ mt: 2 }}>
      {[...steps].sort(sortScenarioSteps).map((step, index) => (
        <AgentScenarioStepsTreeViewItem key={index} step={step} index={index} />
      ))}
    </BaseTreeView>
  );
};

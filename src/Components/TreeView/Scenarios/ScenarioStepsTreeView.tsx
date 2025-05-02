import { ScenarioCoverageStep } from '../../../Models/Coverage/State';
import { FC } from 'react';
import { ScenarioStepsTreeViewItem } from './ScenarioStepsTreeViewItem';
import { BaseTreeView } from '../BaseTreeView';
import { sortScenarioSteps } from '../../../Services/Scenarios';

type Props = {
  steps: ScenarioCoverageStep[];
};

export const ScenarioStepsTreeView: FC<Props> = ({ steps }) => {
  return (
    <BaseTreeView sx={{ mt: 2 }}>
      {[...steps].sort(sortScenarioSteps).map((step, index) => (
        <ScenarioStepsTreeViewItem key={index} step={step} index={index} />
      ))}
    </BaseTreeView>
  );
};

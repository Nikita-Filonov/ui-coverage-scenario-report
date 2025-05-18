import { FC } from 'react';
import { SimpleScenarioStepsTreeViewItem } from './SimpleScenarioStepsTreeViewItem';
import { BaseTreeView } from '../BaseTreeView';
import { ScenarioCoverageStep } from '../../../Models/Coverage/State';
import { sortScenarioSteps } from '../../../Services/Scenarios';

type Props = {
  steps: ScenarioCoverageStep[];
};

export const SimpleScenarioStepsTreeView: FC<Props> = ({ steps }) => {
  return (
    <BaseTreeView sx={{ mt: 2 }}>
      {[...steps].sort(sortScenarioSteps).map((step, index) => (
        <SimpleScenarioStepsTreeViewItem key={index} step={step} index={index} />
      ))}
    </BaseTreeView>
  );
};

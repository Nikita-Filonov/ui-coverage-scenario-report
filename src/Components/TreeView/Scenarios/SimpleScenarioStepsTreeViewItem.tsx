import { ScenarioCoverageStep } from '../../../Models/Coverage/State';
import { BaseTreeItem } from '../BaseTreeItem';
import { FC } from 'react';
import { ScenarioStepsTreeViewSelectorTypeItem } from './ScenarioStepsTreeViewSelectorTypeItem';
import { ScenarioStepsTreeViewSelectorItem } from './ScenarioStepsTreeViewSelectorItem';
import { ScenarioStepsTreeViewActionItem } from './ScenarioStepsTreeViewActionItem';
import { ScenarioStepsTreeViewItemTitle } from './ScenarioStepsTreeViewItemTitle';

type Props = {
  step: ScenarioCoverageStep;
  index: number;
};

export const SimpleScenarioStepsTreeViewItem: FC<Props> = ({ step, index }) => {
  return (
    <BaseTreeItem itemId={`${index}`} label={<ScenarioStepsTreeViewItemTitle step={step} index={index} />}>
      <ScenarioStepsTreeViewActionItem index={index} action={step.actionType} />
      <ScenarioStepsTreeViewSelectorTypeItem index={index} selectorType={step.selectorType} />
      <ScenarioStepsTreeViewSelectorItem index={index} selector={step.selector} />
    </BaseTreeItem>
  );
};

import { ScenarioCoverageStep } from '../../../../Models/Coverage/State';
import { BaseTreeItem } from '../../BaseTreeItem';
import { FC } from 'react';
import { ScenarioStepsTreeViewSelectorTypeItem } from '../../Scenarios/ScenarioStepsTreeViewSelectorTypeItem';
import { ScenarioStepsTreeViewSelectorItem } from '../../Scenarios/ScenarioStepsTreeViewSelectorItem';
import { ScenarioStepsTreeViewActionItem } from '../../Scenarios/ScenarioStepsTreeViewActionItem';
import { ScenarioStepsTreeViewItemTitle } from '../../Scenarios/ScenarioStepsTreeViewItemTitle';

type Props = {
  step: ScenarioCoverageStep;
  index: number;
};

export const AgentScenarioStepsTreeViewItem: FC<Props> = ({ step, index }) => {
  return (
    <BaseTreeItem itemId={`${index}`} label={<ScenarioStepsTreeViewItemTitle step={step} index={index} />}>
      <ScenarioStepsTreeViewActionItem index={index} action={step.actionType} />
      <ScenarioStepsTreeViewSelectorTypeItem index={index} selectorType={step.selectorType} />
      <ScenarioStepsTreeViewSelectorItem index={index} selector={step.selector} />
    </BaseTreeItem>
  );
};

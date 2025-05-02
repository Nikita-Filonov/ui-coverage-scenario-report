import { ScenarioCoverageStep } from '../../../Models/Coverage/State';
import { FC, MouseEvent, useEffect, useMemo } from 'react';
import { useAgentControls } from '../../../Providers/Agent/AgentControlsProvider';
import { BaseTreeItem } from '../BaseTreeItem';
import IconButton from '@mui/material/IconButton';
import { ScenarioStepsTreeViewSelectorItem } from './ScenarioStepsTreeViewSelectorItem';
import { ScenarioStepsTreeViewSelectorTypeItem } from './ScenarioStepsTreeViewSelectorTypeItem';
import { ScenarioStepsTreeViewActionItem } from './ScenarioStepsTreeViewActionItem';
import { HighlightedIcon } from '../../Icons/HighlightedIcon';
import { ScenarioStepsTreeViewItemTitle } from './ScenarioStepsTreeViewItemTitle';

type Props = {
  step: ScenarioCoverageStep;
  index: number;
};

export const ScenarioStepsTreeViewItem: FC<Props> = ({ step, index }) => {
  const { elementHighlight, setElementHighlight } = useAgentControls();

  useEffect(() => {
    return () => setElementHighlight(null);
  }, []);

  const highlighted = useMemo(() => step.selector === elementHighlight?.selector, [step, elementHighlight]);

  const onHighlight = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setElementHighlight(highlighted ? null : step);
  };

  return (
    <BaseTreeItem
      sx={{ py: 0.3 }}
      label={
        <ScenarioStepsTreeViewItemTitle
          step={step}
          index={index}
          action={
            <IconButton size={'small'} onClick={onHighlight}>
              <HighlightedIcon highlighted={highlighted} />
            </IconButton>
          }
        />
      }
      itemId={`${index}`}>
      <ScenarioStepsTreeViewActionItem index={index} action={step.actionType} />
      <ScenarioStepsTreeViewSelectorTypeItem index={index} selectorType={step.selectorType} />
      <ScenarioStepsTreeViewSelectorItem index={index} selector={step.selector} />
    </BaseTreeItem>
  );
};

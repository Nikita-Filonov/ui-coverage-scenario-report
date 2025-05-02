import { MAP_ACTION_TYPE_TO_ICON, normalizeActionType } from '../../../Services/Actions';
import Typography from '@mui/material/Typography';
import { TitleView } from '../../Views/TitleView';
import { FC, ReactNode } from 'react';
import { ScenarioCoverageStep } from '../../../Models/Coverage/State';

type Props = {
  step: ScenarioCoverageStep;
  index: number;
  action?: ReactNode;
};

export const ScenarioStepsTreeViewItemTitle: FC<Props> = ({ step, index, action }) => {
  return (
    <TitleView
      icon={MAP_ACTION_TYPE_TO_ICON[step.actionType]}
      title={
        <Typography>
          {index + 1}. <b>{normalizeActionType(step.actionType)}</b>: {step.selector}
        </Typography>
      }
      action={action}
    />
  );
};

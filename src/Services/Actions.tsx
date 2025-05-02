import { ActionCoverage, ActionType } from '../Models/Core/Actions';
import { ActionHistory } from '../Models/Coverage/History';
import dayjs from 'dayjs';
import { blue, green, orange, purple } from '@mui/material/colors';
import { ReactNode } from 'react';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DoNotTouchOutlinedIcon from '@mui/icons-material/DoNotTouchOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

export const normalizeActionType = (action: ActionType): string => {
  return action
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

type GetActionsChartDataProps = {
  actions: (ActionHistory | ActionCoverage)[];
  createdAt: string;
};

export const getActionsChartData = (props: GetActionsChartDataProps): Record<string, number | Date> => {
  const { actions, createdAt } = props;

  const base: Record<string, number | Date> = {
    createdAt: dayjs(createdAt).toDate()
  };

  for (const action of actions) {
    base[action.actionType] = action.count;
  }

  return base;
};

export const MAP_ACTION_TYPE_TO_COLOR: Record<ActionType, string> = {
  // input
  [ActionType.Fill]: green['300'],
  [ActionType.Type]: green['400'],
  [ActionType.Select]: green['500'],

  // action
  [ActionType.Click]: blue['300'],
  [ActionType.Hover]: blue['400'],

  // assert
  [ActionType.Text]: purple['300'],
  [ActionType.Value]: purple['400'],
  [ActionType.Hidden]: purple['500'],
  [ActionType.Visible]: purple['600'],
  [ActionType.Checked]: orange['300'],
  [ActionType.Enabled]: orange['400'],
  [ActionType.Disabled]: orange['500'],
  [ActionType.Unchecked]: orange['600']
};

export const ACTION_TYPES_BY_GROUP: Record<'input' | 'action' | 'assert', ActionType[]> = {
  input: [ActionType.Fill, ActionType.Type, ActionType.Select],
  action: [ActionType.Click, ActionType.Hover],
  assert: [
    ActionType.Text,
    ActionType.Value,
    ActionType.Hidden,
    ActionType.Visible,
    ActionType.Checked,
    ActionType.Enabled,
    ActionType.Disabled,
    ActionType.Unchecked
  ]
};

export const MAP_ACTION_TYPE_TO_ICON: Record<ActionType, ReactNode> = {
  // input
  [ActionType.Fill]: <EditOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Type]: <EditOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Select]: <ArrowDropDownCircleOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,

  // action
  [ActionType.Click]: <MouseOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Hover]: <PanToolAltOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,

  // assert
  [ActionType.Text]: <TextFieldsIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Value]: <LabelOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Hidden]: <VisibilityOffOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Visible]: <VisibilityOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Checked]: <CheckBoxOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Enabled]: <ToggleOnIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Disabled]: <DoNotTouchOutlinedIcon sx={{ mr: 1.5 }} fontSize={'small'} />,
  [ActionType.Unchecked]: <CheckBoxOutlineBlankIcon sx={{ mr: 1.5 }} fontSize={'small'} />
};

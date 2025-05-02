import { TitleView } from '../../Views/TitleView';
import { BaseTreeItem } from '../BaseTreeItem';
import { FC } from 'react';
import { MAP_ACTION_TYPE_TO_ICON, normalizeActionType } from '../../../Services/Actions';
import { ActionType } from '../../../Models/Core/Actions';

type Props = {
  index: number;
  action: ActionType;
};

export const ScenarioStepsTreeViewActionItem: FC<Props> = ({ index, action }) => {
  return (
    <BaseTreeItem
      itemId={`${index}-actions`}
      label={
        <TitleView
          icon={MAP_ACTION_TYPE_TO_ICON[action]}
          title={`Action: ${normalizeActionType(action)}`}
          value={action}
          allowCopy={true}
        />
      }
    />
  );
};

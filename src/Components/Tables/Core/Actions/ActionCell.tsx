import { BaseTableCell } from '../../BaseTableCell';
import { FC } from 'react';
import { ActionType } from '../../../../Models/Core/Actions';
import { MAP_ACTION_TYPE_TO_ICON, normalizeActionType } from '../../../../Services/Actions';

type Props = {
  type: ActionType;
};

export const ActionCell: FC<Props> = ({ type }) => {
  return <BaseTableCell text={normalizeActionType(type)} icon={MAP_ACTION_TYPE_TO_ICON[type]} />;
};

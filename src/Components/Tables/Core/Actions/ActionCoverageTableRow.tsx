import { FC } from 'react';
import { ActionCell } from './ActionCell';
import { BaseTableRow } from '../../BaseTableRow';
import { ActionCoverage } from '../../../../Models/Core/Actions';

type Props = {
  action: ActionCoverage;
};

export const ActionCoverageTableRow: FC<Props> = ({ action }) => {
  return <BaseTableRow cells={[{ value: <ActionCell type={action.actionType} /> }, { value: action.count }]} />;
};

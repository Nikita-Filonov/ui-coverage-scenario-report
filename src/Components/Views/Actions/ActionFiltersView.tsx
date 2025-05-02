import { Box } from '@mui/material';
import { ACTION_TYPES_BY_GROUP } from '../../../Services/Actions';
import { ActionTypeFiltersView } from './ActionTypeFiltersView';
import { ActionTypeGroupFiltersView } from './ActionTypeGroupFiltersView';
import { ActionFilters } from '../../../Models/Core/Actions';

type Props<T extends ActionFilters> = {
  filters: T;
  setFilters: (filters: T) => void;
};

export const ActionFiltersView = <T extends ActionFilters>({ filters, setFilters }: Props<T>) => {
  return (
    <Box>
      <ActionTypeGroupFiltersView filters={filters} setFilters={setFilters} />
      <ActionTypeFiltersView
        title={'Input filters'}
        actions={ACTION_TYPES_BY_GROUP.input}
        filters={filters}
        setFilters={setFilters}
      />
      <ActionTypeFiltersView
        title={'Action filters'}
        actions={ACTION_TYPES_BY_GROUP.action}
        filters={filters}
        setFilters={setFilters}
      />
      <ActionTypeFiltersView
        title={'Assert filters'}
        actions={ACTION_TYPES_BY_GROUP.assert}
        filters={filters}
        setFilters={setFilters}
      />
    </Box>
  );
};

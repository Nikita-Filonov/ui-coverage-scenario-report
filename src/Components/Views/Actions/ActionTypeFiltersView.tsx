import { ActionFilters, ActionType } from '../../../Models/Core/Actions';
import { BaseCheckbox } from '../../Checkboxes/BaseCheckbox';
import { normalizeActionType } from '../../../Services/Actions';
import { BoxView } from '../BoxView';

type Props<T extends ActionFilters> = {
  title: string;
  filters: T;
  actions: ActionType[];
  setFilters: (filters: T) => void;
};

export const ActionTypeFiltersView = <T extends ActionFilters>(props: Props<T>) => {
  const { title, filters, actions, setFilters } = props;

  const onAction = (type: ActionType) => () => {
    setFilters({
      ...filters,
      actions: filters.actions.includes(type)
        ? filters.actions.filter((action) => action !== type)
        : [...filters.actions, type]
    });
  };

  return (
    <BoxView title={title} containerSx={{ mt: 3 }}>
      {actions.map((action, index) => (
        <BaseCheckbox
          key={index}
          label={normalizeActionType(action)}
          checked={filters.actions.includes(action)}
          onChange={onAction(action)}
        />
      ))}
    </BoxView>
  );
};

import { BaseCheckbox } from '../../Checkboxes/BaseCheckbox';
import { BoxView } from '../BoxView';
import { SelectorType, SelectorTypeFilters } from '../../../Models/Core/Selector';

type Props<T extends SelectorTypeFilters> = {
  filters: T;
  setFilters: (filters: T) => void;
};

export const SelectorTypeFiltersView = <T extends SelectorTypeFilters>(props: Props<T>) => {
  const { filters, setFilters } = props;

  const onSelectorType = (type: SelectorType) => () => {
    setFilters({
      ...filters,
      selectorTypes: filters.selectorTypes.includes(type)
        ? filters.selectorTypes.filter((t) => t !== type)
        : [...filters.selectorTypes, type]
    });
  };

  return (
    <BoxView title={'Selector type filters'}>
      <BaseCheckbox
        label={'CSS'}
        checked={filters.selectorTypes.includes(SelectorType.CSS)}
        onChange={onSelectorType(SelectorType.CSS)}
      />
      <BaseCheckbox
        label={'XPath'}
        checked={filters.selectorTypes.includes(SelectorType.XPath)}
        onChange={onSelectorType(SelectorType.XPath)}
      />
    </BoxView>
  );
};

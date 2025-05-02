import { BaseModal } from '../BaseModal';
import { FC } from 'react';
import { ActionFiltersView } from '../../Views/Actions/ActionFiltersView';
import { SelectorTypeFiltersView } from '../../Views/Selector/SelectorTypeFiltersView';
import { useScenarioStepsFilters } from '../../../Providers/Coverage/ScenarioStepsFiltersProvider';
import { ClearAllButton } from '../../Buttons/ClearAllButton';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export const ScenarioStepsFiltersModal: FC<Props> = (props) => {
  const { modal, setModal } = props;
  const { filters, setFilters, clearAllFilters } = useScenarioStepsFilters();

  return (
    <BaseModal title={'Steps filters'} modal={modal} setModal={setModal}>
      <ActionFiltersView filters={filters} setFilters={setFilters} />
      <SelectorTypeFiltersView filters={filters} setFilters={setFilters} />
      <ClearAllButton onClick={clearAllFilters} />
    </BaseModal>
  );
};

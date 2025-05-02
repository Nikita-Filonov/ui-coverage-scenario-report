import { BaseModal } from '../../BaseModal';
import { FC } from 'react';
import { useAgentFilters } from '../../../../Providers/Agent/AgentFiltersProvider';
import { ActionFiltersView } from '../../../Views/Actions/ActionFiltersView';
import { ClearAllButton } from '../../../Buttons/ClearAllButton';
import { SelectorTypeFiltersView } from '../../../Views/Selector/SelectorTypeFiltersView';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export const AgentFiltersModal: FC<Props> = ({ modal, setModal }) => {
  const { filters, setFilters, clearAllFilters } = useAgentFilters();

  return (
    <BaseModal title={'Agent filters'} modal={modal} setModal={setModal}>
      <ActionFiltersView filters={filters} setFilters={setFilters} />
      <SelectorTypeFiltersView filters={filters} setFilters={setFilters} />
      <ClearAllButton onClick={clearAllFilters} />
    </BaseModal>
  );
};

import { BaseModal } from '../../BaseModal';
import { FC } from 'react';
import { AgentElementCoverageDetailsView } from '../../../../Views/Agent/Elements/AgentElementCoverageDetailsView';
import { AgentElementCoverage } from '../../../../Models/Agent/Element';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  element: AgentElementCoverage;
};

export const AgentElementCoverageDetailsModal: FC<Props> = ({ modal, setModal, element }) => {
  return (
    <BaseModal sx={{ zIndex: 1900 }} title={'Element details'} modal={modal} setModal={setModal} maxWidth={'md'}>
      <AgentElementCoverageDetailsView element={element} />
    </BaseModal>
  );
};

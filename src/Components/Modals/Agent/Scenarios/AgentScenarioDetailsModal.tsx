import { BaseModal } from '../../BaseModal';
import { FC } from 'react';
import { AgentScenarioDetailsView } from '../../../../Views/Agent/Scenarios/AgentScenarioDetailsView';
import { ScenarioCoverage } from '../../../../Models/Coverage/State';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  scenario: ScenarioCoverage;
};

export const AgentScenarioDetailsModal: FC<Props> = ({ modal, setModal, scenario }) => {
  return (
    <BaseModal sx={{ zIndex: 1900 }} title={'Scenario details'} modal={modal} setModal={setModal} maxWidth={'md'}>
      <AgentScenarioDetailsView scenario={scenario} />
    </BaseModal>
  );
};

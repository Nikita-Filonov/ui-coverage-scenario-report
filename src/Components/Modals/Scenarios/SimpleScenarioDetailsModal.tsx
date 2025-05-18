import { FC } from 'react';
import { SimpleScenarioDetailsView } from '../../../Views/Scenarios/Details/SimpleScenarioDetailsView';
import { ScenarioCoverage } from '../../../Models/Coverage/State';
import { BaseModal } from '../BaseModal';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  scenario: ScenarioCoverage;
};

export const SimpleScenarioDetailsModal: FC<Props> = ({ modal, setModal, scenario }) => {
  return (
    <BaseModal sx={{ zIndex: 1900 }} title={'Scenario details'} modal={modal} setModal={setModal} maxWidth={'md'}>
      <SimpleScenarioDetailsView scenario={scenario} />
    </BaseModal>
  );
};

import { FC, useMemo, useState } from 'react';
import { List } from '@mui/material';
import { AgentScenarioListItem } from '../../../Components/ListItems/Agent/Scenarios/AgentScenarioListItem';
import { ScenarioCoverage } from '../../../Models/Coverage/State';
import { BoxView } from '../../../Components/Views/BoxView';
import { EmptyView } from '../../../Components/Views/EmptyView';
import { AgentScenarioDetailsModal } from '../../../Components/Modals/Agent/Scenarios/AgentScenarioDetailsModal';
import { SearchTextField } from '../../../Components/TextFields/SearchTextField';

type Props = {
  scenarios: ScenarioCoverage[];
};

export const AgentScenariosView: FC<Props> = ({ scenarios }) => {
  const [search, setSearch] = useState('');
  const [scenario, setScenario] = useState<ScenarioCoverage | null>(null);
  const [scenarioDetailsModal, setScenarioDetailsModal] = useState(false);

  const filteredScenarios = useMemo(
    () => scenarios.filter((scenario) => scenario.name.toLowerCase().includes(search.toLowerCase())),
    [search, scenarios]
  );

  const onScenarioDetails = (scenario: ScenarioCoverage) => {
    setScenario(scenario);
    setScenarioDetailsModal(true);
  };

  return (
    <BoxView title={'Scenarios'}>
      {scenarios.length > 0 && (
        <SearchTextField sx={{ mt: 3 }} search={search} setSearch={setSearch} placeholder={'Search by scenario name'} />
      )}
      {scenarios.length === 0 && (
        <EmptyView title={'Empty scenarios'} description={'There is no scenarios registered'} />
      )}
      <List dense>
        {filteredScenarios.map((scenario, index) => (
          <AgentScenarioListItem key={index} scenario={scenario} onScenarioDetails={onScenarioDetails} />
        ))}
      </List>
      {scenario && (
        <AgentScenarioDetailsModal
          modal={scenarioDetailsModal}
          setModal={setScenarioDetailsModal}
          scenario={scenario}
        />
      )}
    </BoxView>
  );
};

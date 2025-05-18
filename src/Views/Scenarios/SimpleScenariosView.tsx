import { FC, useMemo, useState } from 'react';
import { List } from '@mui/material';
import { SimpleScenarioListItem } from '../../Components/ListItems/Scenarios/SimpleScenarioListItem';
import { ScenarioCoverage } from '../../Models/Coverage/State';
import { BoxView } from '../../Components/Views/BoxView';
import { SearchTextField } from '../../Components/TextFields/SearchTextField';
import { EmptyView } from '../../Components/Views/EmptyView';
import { SimpleScenarioDetailsModal } from '../../Components/Modals/Scenarios/SimpleScenarioDetailsModal';

type Props = {
  scenarios: ScenarioCoverage[];
};

export const SimpleScenariosView: FC<Props> = ({ scenarios }) => {
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
          <SimpleScenarioListItem key={index} scenario={scenario} onScenarioDetails={onScenarioDetails} />
        ))}
      </List>
      {scenario && (
        <SimpleScenarioDetailsModal
          modal={scenarioDetailsModal}
          setModal={setScenarioDetailsModal}
          scenario={scenario}
        />
      )}
    </BoxView>
  );
};

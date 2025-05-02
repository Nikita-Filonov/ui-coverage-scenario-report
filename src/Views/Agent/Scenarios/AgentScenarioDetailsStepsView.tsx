import { FC, useMemo, useState } from 'react';
import { AgentScenarioStepsTreeView } from '../../../Components/TreeView/Agent/Scenarios/AgentScenarioStepsTreeView';
import { EmptyView } from '../../../Components/Views/EmptyView';
import { BoxView } from '../../../Components/Views/BoxView';
import { ScenarioCoverageStep } from '../../../Models/Coverage/State';
import { SearchTextField } from '../../../Components/TextFields/SearchTextField';

type Props = {
  steps: ScenarioCoverageStep[];
};

export const AgentScenarioDetailsStepsView: FC<Props> = ({ steps }) => {
  const [search, setSearch] = useState('');

  const filteredSteps = useMemo(
    () => steps.filter((step) => step.selector.toLowerCase().includes(search.toLowerCase())),
    [search, steps]
  );

  return (
    <BoxView title={'Steps'}>
      {steps.length > 0 && (
        <SearchTextField sx={{ mt: 3 }} search={search} setSearch={setSearch} placeholder={'Search by selector'} />
      )}
      {steps.length === 0 && (
        <EmptyView title={'Empty steps'} description={'There is not steps logged for this scenario'} />
      )}
      <AgentScenarioStepsTreeView steps={filteredSteps} />
    </BoxView>
  );
};

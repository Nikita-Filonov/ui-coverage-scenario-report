import { FC, useMemo, useState } from 'react';
import { ScenarioCoverage } from '../../Models/Coverage/State';
import { EmptyView } from '../../Components/Views/EmptyView';
import { List } from '@mui/material';
import { ScenarioListItem } from '../../Components/ListItems/Scenarios/ScenarioListItem';
import { SearchTextField } from '../../Components/TextFields/SearchTextField';
import { useInitialState } from '../../Providers/Core/InitialStateProvider';
import { WidgetView } from '../../Components/Views/WidgetView';
import { useAgentControls } from '../../Providers/Agent/AgentControlsProvider';
import { CheckBoxIcon } from '../../Components/Icons/CheckBoxIcon';
import CloseIcon from '@mui/icons-material/Close';
import { useFrameLayoutSettings } from '../../Providers/Frame/FrameLayoutSettingsProvider';

type Props = {
  setScenario: (scenario: ScenarioCoverage) => void;
};

export const ScenariosView: FC<Props> = ({ setScenario }) => {
  const { state } = useInitialState();
  const { onHideScenarios } = useFrameLayoutSettings();
  const { isAllScenariosSelected, onSelectAllScenarios, onDeselectAllScenarios } = useAgentControls();
  const [search, setSearch] = useState('');

  const filteredScenarios = useMemo(
    () => state.scenarios.filter((scenario) => scenario.name.toLowerCase().includes(search.toLowerCase())),
    [search, state.scenarios]
  );

  return (
    <WidgetView
      sx={{ height: 700 }}
      title={'Scenarios'}
      actions={[
        {
          icon: <CheckBoxIcon checked={isAllScenariosSelected} />,
          onClick: isAllScenariosSelected ? onDeselectAllScenarios : onSelectAllScenarios
        },
        { icon: <CloseIcon fontSize={'small'} />, onClick: onHideScenarios }
      ]}>
      {state.scenarios.length > 0 && (
        <SearchTextField sx={{ mt: 3 }} search={search} setSearch={setSearch} placeholder={'Search by scenario name'} />
      )}
      {state.scenarios.length === 0 && (
        <EmptyView title={'Empty scenarios'} description={'There is no scenarios registered'} />
      )}
      <List dense>
        {filteredScenarios.map((scenario, index) => (
          <ScenarioListItem key={index} scenario={scenario} onScenarioDetails={setScenario} />
        ))}
      </List>
    </WidgetView>
  );
};

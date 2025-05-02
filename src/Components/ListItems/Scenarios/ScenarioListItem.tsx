import { BaseListItem } from '../BaseListItem';
import { ScenarioCoverage } from '../../../Models/Coverage/State';
import { FC, useMemo } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useAgentControls } from '../../../Providers/Agent/AgentControlsProvider';

type Props = {
  scenario: ScenarioCoverage;
  onScenarioDetails: (scenario: ScenarioCoverage) => void;
};

export const ScenarioListItem: FC<Props> = (props) => {
  const { scenario, onScenarioDetails } = props;
  const { selectedScenarios, onSelectScenario } = useAgentControls();

  const selected = useMemo(() => selectedScenarios.includes(scenario.name), [scenario.name, selectedScenarios]);

  const onSelect = () => onSelectScenario(scenario.name);

  const onDetails = () => onScenarioDetails(scenario);

  return (
    <BaseListItem
      icon={<Checkbox size={'small'} checked={selected} disableRipple onChange={onSelect} />}
      menu={
        <IconButton size={'small'} onClick={onDetails}>
          <ArticleOutlinedIcon fontSize={'small'} />
        </IconButton>
      }
      dense={true}
      title={scenario.name}
      compact={true}
      onClick={onSelect}
      selected={selected}
    />
  );
};

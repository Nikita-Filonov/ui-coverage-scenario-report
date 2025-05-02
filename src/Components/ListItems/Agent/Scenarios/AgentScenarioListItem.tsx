import { FC } from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { ScenarioCoverage } from '../../../../Models/Coverage/State';
import { BaseListItem } from '../../BaseListItem';

type Props = {
  scenario: ScenarioCoverage;
  onScenarioDetails: (scenario: ScenarioCoverage) => void;
};

export const AgentScenarioListItem: FC<Props> = (props) => {
  const { scenario, onScenarioDetails } = props;

  const onDetails = () => onScenarioDetails(scenario);

  return (
    <BaseListItem
      icon={<DescriptionOutlinedIcon fontSize={'small'} />}
      dense={true}
      title={scenario.name}
      onClick={onDetails}
    />
  );
};

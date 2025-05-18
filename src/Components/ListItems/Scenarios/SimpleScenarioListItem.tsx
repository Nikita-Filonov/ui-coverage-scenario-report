import { FC } from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { BaseListItem } from '../BaseListItem';
import { ScenarioCoverage } from '../../../Models/Coverage/State';

type Props = {
  scenario: ScenarioCoverage;
  onScenarioDetails: (scenario: ScenarioCoverage) => void;
};

export const SimpleScenarioListItem: FC<Props> = (props) => {
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

import { ScenarioCoverage } from '../../../Models/Coverage/State';
import { FC, useMemo } from 'react';
import { ScenarioDetailsStepsView } from './ScenarioDetailsStepsView';
import { ActionCoverageTable } from '../../../Components/Tables/Core/Actions/ActionCoverageTable';
import { ScenarioHistoryChartView } from '../../../Components/Charts/Coverage/History/ScenarioHistoryChartView';
import { WidgetView } from '../../../Components/Views/WidgetView';
import CloseIcon from '@mui/icons-material/Close';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { ScenarioDetailsInfoView } from './ScenarioDetailsInfoView';
import { useAgentControls } from '../../../Providers/Agent/AgentControlsProvider';
import { CheckBoxIcon } from '../../../Components/Icons/CheckBoxIcon';
import { ScenarioStepsFiltersProvider } from '../../../Providers/Coverage/ScenarioStepsFiltersProvider';

type Props = {
  scenario: ScenarioCoverage;
  setScenario: (scenario: ScenarioCoverage | null) => void;
};

export const ScenarioDetailsView: FC<Props> = ({ scenario, setScenario }) => {
  const { selectedScenarios, onSelectScenario } = useAgentControls();

  const isSelected = useMemo(() => selectedScenarios.includes(scenario.name), [scenario.name, selectedScenarios]);

  const onClose = () => setScenario(null);

  const onSelect = () => onSelectScenario(scenario.name);

  const onCopyURL = async () => scenario.url && window.open(scenario.url, '_blank');

  return (
    <WidgetView
      sx={{ height: 700 }}
      title={'Scenario details'}
      actions={[
        { icon: <CheckBoxIcon checked={isSelected} />, onClick: onSelect },
        { icon: <InsertLinkIcon fontSize={'small'} />, onClick: onCopyURL, disabled: !scenario.url },
        { icon: <CloseIcon fontSize={'small'} />, onClick: onClose }
      ]}>
      <ScenarioDetailsInfoView scenario={scenario} />
      <ScenarioStepsFiltersProvider>
        <ScenarioDetailsStepsView steps={scenario.steps} />
      </ScenarioStepsFiltersProvider>
      <ActionCoverageTable actions={scenario.actions} />
      <ScenarioHistoryChartView history={scenario.history} />
    </WidgetView>
  );
};

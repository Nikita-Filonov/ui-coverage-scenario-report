import { BoxView } from '../../../Components/Views/BoxView';
import { ScenarioCoverageStep } from '../../../Models/Coverage/State';
import { FC, useMemo, useState } from 'react';
import { EmptyView } from '../../../Components/Views/EmptyView';
import { ScenarioStepsTreeView } from '../../../Components/TreeView/Scenarios/ScenarioStepsTreeView';
import { SearchTextField } from '../../../Components/TextFields/SearchTextField';
import { ScenarioStepsFiltersModal } from '../../../Components/Modals/Scenarios/ScenarioStepsFiltersModal';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { filterScenarioSteps } from '../../../Services/Scenarios';
import { useScenarioStepsFilters } from '../../../Providers/Coverage/ScenarioStepsFiltersProvider';

type Props = {
  steps: ScenarioCoverageStep[];
};

export const ScenarioDetailsStepsView: FC<Props> = ({ steps }) => {
  const { filters } = useScenarioStepsFilters();
  const [search, setSearch] = useState('');
  const [filtersModal, setFiltersModal] = useState(false);

  const filteredSteps = useMemo(() => filterScenarioSteps({ steps, search, filters }), [steps, search, filters]);

  const onFilters = () => setFiltersModal(true);

  return (
    <BoxView
      title={'Steps'}
      actions={[
        {
          icon: <FilterAltOutlinedIcon fontSize={'small'} />,
          onClick: onFilters,
          badgeContent: filters.actions.length + filters.selectorTypes.length
        }
      ]}>
      {steps.length > 0 && (
        <SearchTextField sx={{ mt: 3 }} search={search} setSearch={setSearch} placeholder={'Search by selector'} />
      )}
      {steps.length === 0 && (
        <EmptyView title={'Empty steps'} description={'There is not steps logged for this scenario'} />
      )}
      <ScenarioStepsTreeView steps={filteredSteps} />
      <ScenarioStepsFiltersModal modal={filtersModal} setModal={setFiltersModal} />
    </BoxView>
  );
};

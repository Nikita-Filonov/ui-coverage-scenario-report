import CloseIcon from '@mui/icons-material/Close';
import { WidgetView } from '../../../Components/Views/WidgetView';
import { usePagesControls } from '../../../Providers/Pages/PagesControlsProvider';
import { EmptyView } from '../../../Components/Views/EmptyView';
import { useMemo } from 'react';
import { useInitialState } from '../../../Providers/Core/InitialStateProvider';
import { SimpleScenariosView } from '../../Scenarios/SimpleScenariosView';
import { PagesEdgeDetailsInfoView } from './PagesEdgeDetailsInfoView';

export const PagesEdgeDetailsView = () => {
  const { state } = useInitialState();
  const { edge, setEdge } = usePagesControls();

  const scenarios = useMemo(
    () => state.scenarios?.filter((scenario) => edge?.scenarios.includes(scenario.name)),
    [edge?.scenarios, state.scenarios]
  );

  const onClose = () => setEdge(null);

  if (!edge) {
    return <EmptyView title={'Empty edge'} description={'There is no selected edge'} />;
  }

  return (
    <WidgetView
      sx={{ height: 600 }}
      title={'Edge details'}
      actions={[{ icon: <CloseIcon fontSize={'small'} />, onClick: onClose }]}>
      <PagesEdgeDetailsInfoView edge={edge} />
      <SimpleScenariosView scenarios={scenarios} />
    </WidgetView>
  );
};

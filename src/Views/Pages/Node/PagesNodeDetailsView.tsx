import CloseIcon from '@mui/icons-material/Close';
import { WidgetView } from '../../../Components/Views/WidgetView';
import { usePagesControls } from '../../../Providers/Pages/PagesControlsProvider';
import { PagesNodeDetailsInfoView } from './PagesNodeDetailsInfoView';
import { EmptyView } from '../../../Components/Views/EmptyView';
import { useMemo } from 'react';
import { useInitialState } from '../../../Providers/Core/InitialStateProvider';
import { SimpleScenariosView } from '../../Scenarios/SimpleScenariosView';

export const PagesNodeDetailsView = () => {
  const { state } = useInitialState();
  const { node, setNode } = usePagesControls();

  const scenarios = useMemo(
    () => state.scenarios?.filter((scenario) => node?.scenarios.includes(scenario.name)),
    [node?.scenarios, state.scenarios]
  );

  const onClose = () => setNode(null);

  if (!node) {
    return <EmptyView title={'Empty node'} description={'There is no selected node'} />;
  }

  return (
    <WidgetView
      sx={{ height: 600 }}
      title={'Node details'}
      actions={[{ icon: <CloseIcon fontSize={'small'} />, onClick: onClose }]}>
      <PagesNodeDetailsInfoView node={node} />
      <SimpleScenariosView scenarios={scenarios} />
    </WidgetView>
  );
};

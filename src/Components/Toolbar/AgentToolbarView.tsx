import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import { BaseToolbarView } from './BaseToolbarView';
import { FC, Fragment, RefObject, useState } from 'react';
import { AgentSettingsModal } from '../Modals/Agent/Settings/AgentSettingsModal';
import { AgentFiltersModal } from '../Modals/Agent/Filters/AgentFiltersModal';
import { useAgentActions } from '../../Services/Agent/Actions';
import { useAgentFilters } from '../../Providers/Agent/AgentFiltersProvider';
import { useFrameLayoutSettings } from '../../Providers/Frame/FrameLayoutSettingsProvider';
import { ShowListIcon } from '../Icons/ShowListIcon';
import { useAgentControls } from '../../Providers/Agent/AgentControlsProvider';

type Props = {
  frameRef: RefObject<HTMLIFrameElement | null>;
};

export const AgentToolbarView: FC<Props> = ({ frameRef }) => {
  const { filters } = useAgentFilters();
  const { layoutSettings, onShowScenarios, onHideScenarios } = useFrameLayoutSettings();
  const { onSyncAgent, onClearAgent } = useAgentActions({ frameRef });
  const { selectedScenarios } = useAgentControls();
  const [agentFiltersModal, setAgentFiltersModal] = useState(false);
  const [agentSettingsModal, setAgentSettingsModal] = useState(false);

  const onAgentFilters = () => setAgentFiltersModal(true);

  const onAgentSettings = () => setAgentSettingsModal(true);

  return (
    <Fragment>
      <BaseToolbarView
        title={'Agent frame'}
        actions={[
          { icon: <RefreshIcon fontSize={'small'} />, onClick: onSyncAgent },
          { icon: <ClearIcon fontSize={'small'} />, onClick: onClearAgent },
          {
            icon: <ShowListIcon show={layoutSettings.showScenarios} />,
            onClick: layoutSettings.showScenarios ? onHideScenarios : onShowScenarios,
            badgeContent: selectedScenarios.length
          },
          {
            icon: <FilterAltOutlinedIcon fontSize={'small'} />,
            onClick: onAgentFilters,
            badgeContent: filters.actions.length + filters.selectorTypes.length
          },
          { icon: <SettingsOutlinedIcon fontSize={'small'} />, onClick: onAgentSettings }
        ]}
      />
      <AgentFiltersModal modal={agentFiltersModal} setModal={setAgentFiltersModal} />
      <AgentSettingsModal modal={agentSettingsModal} setModal={setAgentSettingsModal} />
    </Fragment>
  );
};

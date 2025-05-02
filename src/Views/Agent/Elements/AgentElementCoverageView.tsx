import { FC, useState } from 'react';
import { useElement } from '../../../Services/Frame/Element';
import { BasePopper } from '../../../Components/Poppers/BasePopper';
import { AgentElementCoverageDetailsModal } from '../../../Components/Modals/Agent/Elements/AgentElementCoverageDetailsModal';
import IconButton from '@mui/material/IconButton';
import { useAgentInitialState } from '../../../Providers/Agent/AgentInitialStateProvider';
import { AgentElementCoverageBadge } from '../../../Components/Badges/Agent/AgentElementCoverageBadge';
import { AgentElementCoverage } from '../../../Models/Agent/Element';
import { AgentElementCoverageTooltip } from '../../../Components/Tooltips/Agent/Elements/AgentElementCoverageTooltip';

type Props = {
  element: AgentElementCoverage;
};

export const AgentElementCoverageView: FC<Props> = ({ element }) => {
  const { state } = useAgentInitialState();
  const { node } = useElement({ type: element.selectorType, value: element.selector, settings: state.settings });
  const [elementDetailsModal, setElementDetailsModal] = useState(false);

  if (!node) return null;

  const onElementDetails = () => setElementDetailsModal(true);

  return (
    <BasePopper anchor={node}>
      <AgentElementCoverageTooltip element={element}>
        <IconButton onClick={onElementDetails}>
          <AgentElementCoverageBadge element={element} settings={state.settings} />
        </IconButton>
      </AgentElementCoverageTooltip>
      <AgentElementCoverageDetailsModal
        modal={elementDetailsModal}
        setModal={setElementDetailsModal}
        element={element}
      />
    </BasePopper>
  );
};

import { FC, ReactElement, useMemo } from 'react';
import { useAgentInitialState } from '../../../../Providers/Agent/AgentInitialStateProvider';
import { BaseTooltip } from '../../BaseTooltip';
import { TitleView } from '../../../Views/TitleView';
import { MAP_ACTION_TYPE_TO_ICON } from '../../../../Services/Actions';
import { AgentElementCoverage } from '../../../../Models/Agent/Element';

type Props = {
  element: AgentElementCoverage;
  children: ReactElement;
};

export const AgentElementCoverageTooltip: FC<Props> = ({ element, children }) => {
  const { state } = useAgentInitialState();
  const elementHighlight = state.elementHighlight;

  const showTooltip = useMemo(
    () => elementHighlight?.selector == element.selector && elementHighlight.selectorType && element.selectorType,
    [element, elementHighlight]
  );

  return elementHighlight && showTooltip ? (
    <BaseTooltip
      open={true}
      title={
        <TitleView icon={MAP_ACTION_TYPE_TO_ICON[elementHighlight.actionType]} title={elementHighlight.selector} />
      }>
      {children}
    </BaseTooltip>
  ) : (
    children
  );
};

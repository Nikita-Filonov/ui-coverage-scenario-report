import React, { Fragment } from 'react';
import { useAgentInitialState } from '../../../Providers/Agent/AgentInitialStateProvider';
import { AgentElementCoverageView } from './AgentElementCoverageView';

export const AgentElementsCoverageView = () => {
  const { state } = useAgentInitialState();

  return (
    <Fragment>
      {state?.elements?.map((element, index) => <AgentElementCoverageView key={index} element={element} />)}
    </Fragment>
  );
};

import { RefObject, useEffect } from 'react';
import { useAgentStateBuilder } from './State';
import { AgentState } from '../../Models/Agent/State';

type UseAgentActionsProps = {
  frameRef: RefObject<HTMLIFrameElement | null>;
};

export const useAgentActions = ({ frameRef }: UseAgentActionsProps) => {
  const { agentState, emptyAgentState } = useAgentStateBuilder();

  useEffect(() => {
    onSyncAgent();
  }, [agentState]);

  const postMessage = (state: AgentState) => {
    const frameWindow = frameRef?.current?.contentWindow;
    if (frameWindow) {
      frameWindow.postMessage(state, '*');
    }
  };

  const onSyncAgent = () => postMessage(agentState);

  const onClearAgent = () => postMessage(emptyAgentState);

  return { onSyncAgent, onClearAgent };
};

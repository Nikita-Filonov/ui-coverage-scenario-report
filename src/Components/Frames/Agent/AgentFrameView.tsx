import { BaseFrame } from '../BaseFrame';
import { useInitialState } from '../../../Providers/Core/InitialStateProvider';
import { FC, RefObject } from 'react';
import { useAgentSettings } from '../../../Providers/Agent/AgentSettingsProvider';

type Props = {
  frameRef: RefObject<HTMLIFrameElement | null>;
};

export const AgentFrameView: FC<Props> = ({ frameRef }) => {
  const { config } = useInitialState();
  const { settings } = useAgentSettings();

  return <BaseFrame sx={{ mt: 2 }} src={config.url} scale={settings.frameScale / 100} frameRef={frameRef} />;
};

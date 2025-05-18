import { Box } from '@mui/material';
import { useRef } from 'react';
import { AgentToolbarView } from '../../Components/Toolbar/Agent/AgentToolbarView';
import { AgentFrameView } from '../../Components/Frames/Agent/AgentFrameView';

export const AgentLayoutView = () => {
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  return (
    <Box>
      <AgentToolbarView frameRef={frameRef} />
      <AgentFrameView frameRef={frameRef} />
    </Box>
  );
};

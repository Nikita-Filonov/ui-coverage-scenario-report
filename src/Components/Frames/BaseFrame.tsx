import { FC, RefObject } from 'react';
import { grey } from '@mui/material/colors';
import { EmptyView } from '../Views/EmptyView';
import { Box, styled } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

type Props = {
  sx?: SxProps<Theme>;
  src: string;
  scale?: number;
  frameRef: RefObject<HTMLIFrameElement | null>;
};

const FrameContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 620,
  overflow: 'hidden',
  border: `1px solid ${grey[500]}`,
  borderRadius: theme.spacing(0.5),
  position: 'relative'
}));

const ScaledContainer = styled(Box)<{ scale: number }>(({ scale }) => ({
  transform: `scale(${scale})`,
  transformOrigin: 'top left',
  width: `${100 / scale}%`,
  height: `${100 / scale}%`,
  position: 'absolute',
  top: 0,
  left: 0
}));

export const BaseFrame: FC<Props> = (props) => {
  const { sx, src, scale = 1, frameRef } = props;

  if (!src) {
    return (
      <EmptyView
        title={'No frame source provided'}
        description={'Frame is not displayed because there is not source to load'}
        containerSx={{ mb: 7 }}
      />
    );
  }

  return (
    <FrameContainer sx={sx}>
      <ScaledContainer scale={scale}>
        <iframe
          src={src}
          ref={frameRef}
          allow={'clipboard-write'}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </ScaledContainer>
    </FrameContainer>
  );
};

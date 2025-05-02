import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import { SxProps, Theme } from '@mui/system';
import { FC, MouseEvent } from 'react';

type Props = {
  sx?: SxProps<Theme>;
  onCopy: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const CopyButton: FC<Props> = ({ sx, onCopy }) => {
  return (
    <IconButton size={'small'} sx={sx} onClick={onCopy}>
      <ContentCopyIcon fontSize={'small'} />
    </IconButton>
  );
};

import { Badge, styled } from '@mui/material';

export const ToolbarBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    fontSize: '0.7rem',
    minWidth: 15,
    height: 15,
    padding: '0 4px'
  }
}));

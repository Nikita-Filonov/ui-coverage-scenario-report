import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  menu?: ReactNode;
  icon?: ReactNode;
  dense?: boolean;
  title?: string;
  label?: ReactNode;
  compact?: boolean;
  subtitle?: string;
  selected?: boolean;
  onClick?: () => void;
};

export const BaseListItem: FC<Props> = (props) => {
  const { menu, icon, dense = false, label, compact, title, subtitle, selected, onClick } = props;

  return (
    <ListItem dense={dense} secondaryAction={menu} divider disableGutters>
      <ListItemButton selected={selected} dense onClick={onClick} disableGutters={compact}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText sx={{ wordBreak: 'break-word', whiteSpace: 'normal' }} primary={title} secondary={subtitle} />
        {label}
      </ListItemButton>
    </ListItem>
  );
};

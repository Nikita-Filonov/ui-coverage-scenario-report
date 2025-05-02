import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { FC } from 'react';

type Props = {
  show: boolean;
};

export const ShowListIcon: FC<Props> = ({ show }) => {
  return show ? <PlaylistRemoveIcon fontSize={'small'} /> : <PlaylistAddIcon fontSize={'small'} />;
};

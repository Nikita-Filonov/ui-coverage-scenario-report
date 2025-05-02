import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { FC } from 'react';

type Props = {
  highlighted: boolean;
};

export const HighlightedIcon: FC<Props> = ({ highlighted }) => {
  return highlighted ? <VisibilityOutlinedIcon fontSize={'small'} /> : <VisibilityOffOutlinedIcon fontSize={'small'} />;
};

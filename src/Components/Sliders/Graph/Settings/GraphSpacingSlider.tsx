import { BaseSlider } from '../../BaseSlider';
import { FC } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  spacing: number;
  setSpacing: (spacing: number) => void;
};

export const GraphSpacingSlider: FC<Props> = ({ title, spacing, setSpacing }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography>{title}</Typography>
      <BaseSlider min={100} max={1000} value={spacing} setValue={setSpacing} formatLabel={(value) => `${value}px`} />
    </Box>
  );
};

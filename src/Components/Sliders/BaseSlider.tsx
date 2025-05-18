import { Box, Slider } from '@mui/material';
import { FC } from 'react';
import Typography from '@mui/material/Typography';

type Props = {
  min: number;
  max: number;
  value: number;
  setValue: (value: number) => void;
  formatLabel: (value: number) => string;
};

export const BaseSlider: FC<Props> = ({ min, max, value, setValue, formatLabel }) => {
  const onChange = (_: Event, newValue: number | number[]) => !Array.isArray(newValue) && setValue(newValue);

  const onMin = () => setValue(min);

  const onMax = () => setValue(max);

  return (
    <Box>
      <Slider
        marks
        step={10}
        value={value}
        valueLabelFormat={formatLabel}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        onChange={onChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" onClick={onMin} sx={{ cursor: 'pointer' }}>
          {formatLabel(min)} min
        </Typography>
        <Typography variant="body2" onClick={onMax} sx={{ cursor: 'pointer' }}>
          {formatLabel(max)} max
        </Typography>
      </Box>
    </Box>
  );
};

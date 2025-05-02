import { BaseSelectMenuItem } from '../BaseSelectMenuItem';
import CircleIcon from '@mui/icons-material/Circle';
import { Color } from '../../../Models/Core/Color';
import { FC } from 'react';
import { capitalizeFirstLetter } from '../../../Services/Core';

type Props = {
  color: Color;
};

export const ColorSelectMenuItem: FC<Props> = ({ color }) => {
  return (
    <BaseSelectMenuItem icon={<CircleIcon sx={{ mr: 1.5 }} color={color} />} title={capitalizeFirstLetter(color)} />
  );
};

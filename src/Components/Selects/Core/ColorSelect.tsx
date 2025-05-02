import { BaseSelect } from '../BaseSelect';
import { Color } from '../../../Models/Core/Color';
import { FC } from 'react';
import { ColorSelectMenuItem } from './ColorSelectMenuItem';

type Props = {
  label: string;
  color: Color;
  setColor: (color: Color) => void;
};

export const ColorSelect: FC<Props> = ({ label, color, setColor }) => {
  return (
    <BaseSelect
      sx={{ mt: 3 }}
      label={label}
      value={color}
      options={Object.values(Color).map((color) => ({
        title: color,
        value: color,
        content: <ColorSelectMenuItem color={color} />
      }))}
      onSelect={setColor}
    />
  );
};

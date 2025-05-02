import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { FC } from 'react';

type Props = {
  checked: boolean;
};

export const CheckBoxIcon: FC<Props> = ({ checked }) => {
  return checked ? <CheckBoxOutlinedIcon fontSize={'small'} /> : <CheckBoxOutlineBlankIcon fontSize={'small'} />;
};

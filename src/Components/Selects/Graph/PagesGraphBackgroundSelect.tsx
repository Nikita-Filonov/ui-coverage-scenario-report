import { FC } from 'react';
import { BaseSelect } from '../BaseSelect';
import { GraphBackground } from '../../../Models/Graph/Settings';

type Props = {
  background: GraphBackground;
  setBackground: (background: GraphBackground) => void;
};

export const GraphBackgroundSelect: FC<Props> = ({ background, setBackground }) => {
  return (
    <BaseSelect
      sx={{ mt: 3 }}
      label={'Graph background'}
      value={background}
      options={[
        { title: 'Dots', value: GraphBackground.Dots },
        { title: 'Lines', value: GraphBackground.Lines },
        { title: 'Cross', value: GraphBackground.Cross }
      ]}
      onSelect={setBackground}
    />
  );
};

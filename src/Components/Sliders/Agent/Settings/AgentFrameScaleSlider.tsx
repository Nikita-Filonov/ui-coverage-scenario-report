import { BaseSlider } from '../../BaseSlider';
import { FC } from 'react';

type Props = {
  scale: number;
  setScale: (scale: number) => void;
};

export const AgentFrameScaleSlider: FC<Props> = ({ scale, setScale }) => {
  return <BaseSlider min={10} max={100} value={scale} setValue={setScale} />;
};

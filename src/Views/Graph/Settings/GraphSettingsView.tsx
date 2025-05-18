import { BoxView } from '../../../Components/Views/BoxView';
import { GraphBackground, GraphSettings } from '../../../Models/Graph/Settings';
import { FC } from 'react';
import { GraphBackgroundSelect } from '../../../Components/Selects/Graph/PagesGraphBackgroundSelect';
import { GraphSpacingSlider } from '../../../Components/Sliders/Graph/Settings/GraphSpacingSlider';

type Props = {
  settings: GraphSettings;
  setSettings: (settings: GraphSettings) => void;
};

export const GraphSettingsView: FC<Props> = ({ settings, setSettings }) => {
  const onBackground = (background: GraphBackground) => setSettings({ ...settings, background });

  const onXSpacing = (xSpacing: number) => setSettings({ ...settings, xSpacing });

  const onYSpacing = (ySpacing: number) => setSettings({ ...settings, ySpacing });

  return (
    <BoxView title={'Graph'} containerSx={{ mt: 0 }}>
      <GraphBackgroundSelect background={settings.background} setBackground={onBackground} />
      <GraphSpacingSlider title={'X spacing'} spacing={settings.xSpacing} setSpacing={onXSpacing} />
      <GraphSpacingSlider title={'Y spacing'} spacing={settings.ySpacing} setSpacing={onYSpacing} />
    </BoxView>
  );
};

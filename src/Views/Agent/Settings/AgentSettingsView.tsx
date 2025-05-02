import Box from '@mui/material/Box';
import { BoxView } from '../../../Components/Views/BoxView';
import { ColorSelect } from '../../../Components/Selects/Core/ColorSelect';
import { AgentBadgeContentType, AgentSettings } from '../../../Models/Agent/Settings';
import { FC } from 'react';
import { Color } from '../../../Models/Core/Color';
import { AgentBadgeContentTypeSelect } from '../../../Components/Selects/Agent/Settings/AgentBadgeContentTypeSelect';
import { AgentFrameScaleSlider } from '../../../Components/Sliders/Agent/Settings/AgentFrameScaleSlider';

type Props = {
  settings: AgentSettings;
  setSettings: (settings: AgentSettings) => void;
};

export const AgentSettingsView: FC<Props> = ({ settings, setSettings }) => {
  const onFrameScale = (frameScale: number) => setSettings({ ...settings, frameScale });

  const onBadgeColor = (badgeColor: Color) => setSettings({ ...settings, badgeColor });

  const onOverlayColor = (overlayColor: Color) => setSettings({ ...settings, overlayColor });

  const onBadgeContentType = (badgeContentType: AgentBadgeContentType) => {
    setSettings({ ...settings, badgeContentType });
  };

  return (
    <Box>
      <BoxView title={'Style'} containerSx={{ mt: 0 }}>
        <ColorSelect label={'Badge color'} color={settings.badgeColor} setColor={onBadgeColor} />
        <ColorSelect label={'Overlay color'} color={settings.overlayColor} setColor={onOverlayColor} />
      </BoxView>
      <BoxView title={'Content'}>
        <AgentBadgeContentTypeSelect type={settings.badgeContentType} setType={onBadgeContentType} />
      </BoxView>
      <BoxView title={'Frame scale'}>
        <AgentFrameScaleSlider scale={settings.frameScale} setScale={onFrameScale} />
      </BoxView>
    </Box>
  );
};

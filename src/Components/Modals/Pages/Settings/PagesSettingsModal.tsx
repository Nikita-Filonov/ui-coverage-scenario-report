import { BaseModal } from '../../BaseModal';
import { PagesSettingsView } from '../../../../Views/Pages/Settings/PagesSettingsView';
import { FC } from 'react';
import { usePagesSettings } from '../../../../Providers/Pages/PagesSettingsProvider';
import { ClearAllButton } from '../../../Buttons/ClearAllButton';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
};

export const PagesSettingsModal: FC<Props> = ({ modal, setModal }) => {
  const { settings, setSettings, clearAllSettings } = usePagesSettings();

  return (
    <BaseModal title={'Pages settings'} modal={modal} setModal={setModal}>
      <PagesSettingsView settings={settings} setSettings={setSettings} />
      <ClearAllButton onClick={clearAllSettings} />
    </BaseModal>
  );
};

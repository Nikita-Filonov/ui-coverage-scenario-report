import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { BaseToolbarView } from '../BaseToolbarView';
import { Fragment, useState } from 'react';
import { PagesSettingsModal } from '../../Modals/Pages/Settings/PagesSettingsModal';

export const PagesGraphToolbarView = () => {
  const [pagesSettingsModal, setPagesSettingsModal] = useState(false);

  const onPagesSettings = () => setPagesSettingsModal(true);

  return (
    <Fragment>
      <BaseToolbarView
        title={'Pages graph'}
        actions={[{ icon: <SettingsOutlinedIcon fontSize={'small'} />, onClick: onPagesSettings }]}
      />
      <PagesSettingsModal modal={pagesSettingsModal} setModal={setPagesSettingsModal} />
    </Fragment>
  );
};

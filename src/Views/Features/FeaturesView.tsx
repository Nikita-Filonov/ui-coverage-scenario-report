import { Box } from '@mui/material';
import { BaseCheckbox } from '../../Components/Checkboxes/BaseCheckbox';
import { ClearAllButton } from '../../Components/Buttons/ClearAllButton';
import { useFeatures } from '../../Providers/Core/FeaturesProvider';

export const FeaturesView = () => {
  const { features, setFeatures, clearAllFeatures } = useFeatures();

  const onFeature = (key: string) => (value: boolean) => setFeatures({ ...features, [key]: value });

  return (
    <Box>
      <BaseCheckbox
        label={'Config view'}
        checked={features.configView}
        onChange={onFeature('configView')}
        containerSx={{ mt: 0 }}
      />
      <BaseCheckbox
        label={'Coverage history view'}
        checked={features.coverageHistoryView}
        onChange={onFeature('coverageHistoryView')}
      />
      <BaseCheckbox label={'Pages view'} checked={features.pagesView} onChange={onFeature('pagesView')} />
      <BaseCheckbox label={'Frame view'} checked={features.frameView} onChange={onFeature('frameView')} />
      <ClearAllButton onClick={clearAllFeatures} />
    </Box>
  );
};

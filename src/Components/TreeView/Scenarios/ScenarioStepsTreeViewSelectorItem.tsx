import { TitleView } from '../../Views/TitleView';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { BaseTreeItem } from '../BaseTreeItem';
import { FC } from 'react';

type Props = {
  index: number;
  selector: string;
};

export const ScenarioStepsTreeViewSelectorItem: FC<Props> = ({ index, selector }) => {
  return (
    <BaseTreeItem
      itemId={`${index}-selector`}
      label={
        <TitleView
          icon={<AdsClickIcon fontSize={'small'} sx={{ mr: 1.5 }} />}
          title={`Selector: ${selector}`}
          value={selector}
          allowCopy={true}
        />
      }
    />
  );
};

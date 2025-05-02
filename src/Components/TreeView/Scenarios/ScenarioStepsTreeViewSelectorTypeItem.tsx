import { TitleView } from '../../Views/TitleView';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { BaseTreeItem } from '../BaseTreeItem';
import { FC } from 'react';
import { SelectorType } from '../../../Models/Core/Selector';

type Props = {
  index: number;
  selectorType: SelectorType;
};

export const ScenarioStepsTreeViewSelectorTypeItem: FC<Props> = ({ index, selectorType }) => {
  return (
    <BaseTreeItem
      itemId={`${index}-selector-type`}
      label={
        <TitleView
          icon={<DataObjectIcon fontSize={'small'} sx={{ mr: 1.5 }} />}
          title={`Selector type: ${selectorType}`}
          value={selectorType}
          allowCopy={true}
        />
      }
    />
  );
};

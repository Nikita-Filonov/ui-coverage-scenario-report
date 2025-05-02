import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { FC } from 'react';
import { ScenarioCoverage } from '../../../Models/Coverage/State';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { BoxView } from '../../../Components/Views/BoxView';
import { SxProps, Theme } from '@mui/system';

type Props = {
  sx?: SxProps<Theme>;
  scenario: ScenarioCoverage;
};

export const ScenarioDetailsInfoView: FC<Props> = ({ sx, scenario }) => {
  return (
    <BoxView containerSx={sx} title={'Base info'}>
      <WidgetInfoRowsView>
        <BaseInfoRowView icon={<InsertLinkIcon fontSize={'small'} />} name={'URL'} value={scenario.url} />
        <BaseInfoRowView icon={<ArticleOutlinedIcon fontSize={'small'} />} name={'Name'} value={scenario.name} />
        <BaseInfoRowView
          icon={<FormatListNumberedIcon fontSize={'small'} />}
          name={'Total number of steps'}
          value={scenario.steps.length}
        />
        <BaseInfoRowView
          icon={<BuildOutlinedIcon fontSize={'small'} />}
          name={'Total number of action types'}
          value={scenario.actions.length}
        />
      </WidgetInfoRowsView>
    </BoxView>
  );
};

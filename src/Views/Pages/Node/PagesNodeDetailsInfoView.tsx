import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { BoxView } from '../../../Components/Views/BoxView';
import { FC } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { PageCoverageNode } from '../../../Models/Coverage/State';

type Props = {
  node: PageCoverageNode;
};

export const PagesNodeDetailsInfoView: FC<Props> = ({ node }) => {
  return (
    <BoxView title={'Base info'}>
      <WidgetInfoRowsView>
        <BaseInfoRowView icon={<DescriptionOutlinedIcon fontSize={'small'} />} name={'Page'} value={node.page} />
        <BaseInfoRowView icon={<LinkIcon fontSize={'small'} />} name={'URL'} value={node.url} />
        <BaseInfoRowView
          icon={<FormatListNumberedIcon fontSize={'small'} />}
          name={'Total number of scenarios'}
          value={node.scenarios.length}
        />
      </WidgetInfoRowsView>
    </BoxView>
  );
};

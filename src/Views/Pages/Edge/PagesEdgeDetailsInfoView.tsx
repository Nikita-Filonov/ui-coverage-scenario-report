import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { BoxView } from '../../../Components/Views/BoxView';
import { FC } from 'react';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { PageCoverageEdge } from '../../../Models/Coverage/State';

type Props = {
  edge: PageCoverageEdge;
};

export const PagesEdgeDetailsInfoView: FC<Props> = ({ edge }) => {
  return (
    <BoxView title={'Base info'}>
      <WidgetInfoRowsView>
        <BaseInfoRowView
          icon={<DescriptionOutlinedIcon fontSize={'small'} />}
          name={'From page'}
          value={edge.fromPage}
        />
        <BaseInfoRowView icon={<DescriptionOutlinedIcon fontSize={'small'} />} name={'To page'} value={edge.toPage} />
        <BaseInfoRowView
          icon={<FormatListNumberedIcon fontSize={'small'} />}
          name={'Total number of scenarios'}
          value={edge.scenarios.length}
        />
        <BaseInfoRowView
          icon={<AltRouteIcon fontSize={'small'} />}
          name={'Total number of transitions'}
          value={edge.count}
        />
      </WidgetInfoRowsView>
    </BoxView>
  );
};

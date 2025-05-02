import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { BoxView } from '../../../Components/Views/BoxView';
import { AgentElementCoverage } from '../../../Models/Agent/Element';
import { FC } from 'react';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import DataObjectIcon from '@mui/icons-material/DataObject';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

type Props = {
  element: AgentElementCoverage;
};

export const AgentElementCoverageDetailsInfoView: FC<Props> = ({ element }) => {
  return (
    <BoxView title={'Base info'} containerSx={{ mt: 0 }}>
      <WidgetInfoRowsView>
        <BaseInfoRowView icon={<AdsClickIcon fontSize={'small'} />} name={'Selector'} value={element.selector} />
        <BaseInfoRowView
          icon={<DataObjectIcon fontSize={'small'} />}
          name={'Selector type'}
          value={element.selectorType}
        />
        <BaseInfoRowView
          icon={<FormatListNumberedIcon fontSize={'small'} />}
          name={'Total number of scenarios'}
          value={element.scenarios.length}
        />
        <BaseInfoRowView
          icon={<BuildOutlinedIcon fontSize={'small'} />}
          name={'Total number of action types'}
          value={element.actions.length}
        />
      </WidgetInfoRowsView>
    </BoxView>
  );
};

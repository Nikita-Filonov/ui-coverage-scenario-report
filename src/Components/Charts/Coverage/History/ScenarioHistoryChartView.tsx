import { ScenarioHistory } from '../../../../Models/Coverage/History';
import { FC, useMemo } from 'react';
import { BaseBarChart } from '../../BaseBarChart';
import { BaseChartView } from '../../BaseChartView';
import { dateTimeValueFormatter } from '../../../../Services/Charts';
import { ActionType } from '../../../../Models/Core/Actions';
import { getActionsChartData, MAP_ACTION_TYPE_TO_COLOR, normalizeActionType } from '../../../../Services/Actions';

type Props = {
  history: ScenarioHistory[];
};

export const ScenarioHistoryChartView: FC<Props> = ({ history }) => {
  const chartData = useMemo(() => history.map(getActionsChartData), [history]);

  return (
    <BaseChartView title={'Scenario history'}>
      <BaseBarChart
        xAxis={[{ dataKey: 'createdAt', scaleType: 'band', valueFormatter: dateTimeValueFormatter }]}
        yAxis={Object.values(ActionType).map((type) => ({
          dataKey: type,
          label: normalizeActionType(type),
          color: MAP_ACTION_TYPE_TO_COLOR[type],
          stack: 'total'
        }))}
        dataset={chartData}
      />
    </BaseChartView>
  );
};

import { WidgetView } from '../../Components/Views/WidgetView';
import { BaseInfoRowView } from '../../Components/Views/BaseInfoRowView';
import { useInitialState } from '../../Providers/Core/InitialStateProvider';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import dayjs from 'dayjs';
import { SettingsManager } from '../../Services/Config';
import { AppConfigTagsLabel } from '../../Components/Labels/Config/AppConfigTagsLabel';
import { useMemo } from 'react';

export const AppConfigView = () => {
  const { config, initialState } = useInitialState();

  const reportCreatedAt = useMemo(
    () => dayjs(initialState.createdAt).format(SettingsManager.apiDateTimeFormat),
    [initialState.createdAt]
  );

  return (
    <WidgetView sx={{ mt: 3 }} title={'Config'}>
      <WidgetInfoRowsView>
        <BaseInfoRowView name={'App name'} value={config.name} />
        <BaseInfoRowView name={'App URL'} value={config.url} />
        {Boolean(config.tags?.length) && (
          <BaseInfoRowView name={'App tags'} component={<AppConfigTagsLabel config={config} />} />
        )}
        <BaseInfoRowView name={'App repository'} value={config.repository} />
        <BaseInfoRowView name={'Report created at'} value={reportCreatedAt} />
      </WidgetInfoRowsView>
    </WidgetView>
  );
};

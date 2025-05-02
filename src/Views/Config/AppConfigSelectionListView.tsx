import { BoxView } from '../../Components/Views/BoxView';
import { List } from '@mui/material';
import { useInitialState } from '../../Providers/Core/InitialStateProvider';
import { EmptyView } from '../../Components/Views/EmptyView';
import { SearchTextField } from '../../Components/TextFields/SearchTextField';
import { FC, useMemo, useState } from 'react';
import { AppConfig } from '../../Models/Config';
import { AppConfigSelectionListItem } from '../../Components/ListItems/Config/AppConfigSelectionListItem';

type Props = {
  onSelectConfigCallback?: () => void;
};

export const AppConfigSelectionListView: FC<Props> = ({ onSelectConfigCallback }) => {
  const { config, configs, setConfig } = useInitialState();
  const [search, setSearch] = useState('');

  const filteredConfigs = useMemo(
    () => configs.filter((config) => config.name.toLowerCase().includes(search.toLowerCase())),
    [search, configs]
  );

  const onSelectConfig = (config: AppConfig) => {
    setConfig(config);

    if (onSelectConfigCallback) {
      onSelectConfigCallback();
    }
  };

  return (
    <BoxView title={'Applications'} containerSx={{ mt: 0 }}>
      {configs.length === 0 && (
        <EmptyView title={'Empty applications'} description={'There is no applications to select'} />
      )}
      {configs.length > 0 && (
        <SearchTextField sx={{ mt: 2 }} search={search} setSearch={setSearch} placeholder={'Search by name'} />
      )}
      <List dense>
        {filteredConfigs.map((item, index) => (
          <AppConfigSelectionListItem
            key={index}
            config={item}
            selected={item.key == config.key}
            onSelectConfig={onSelectConfig}
          />
        ))}
      </List>
    </BoxView>
  );
};

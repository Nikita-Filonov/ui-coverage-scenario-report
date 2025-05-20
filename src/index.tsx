import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { InitialStateProvider } from './Providers/Core/InitialStateProvider';
import { AppConfigView } from './Views/Config/ConfigView';
import { MainLayout } from './Components/Layouts/MainLayout';
import { AppToolbarView } from './Components/Toolbar/AppToolbarView';
import { ThemeProvider } from './Providers/Core/ThemeProvider';
import { AppCoverageHistoryView } from './Views/Coverage/History/AppCoverageHistoryView';
import { FrameView } from './Views/Frame/FrameView';
import { PagesView } from './Views/Pages/PagesView';
import { FeaturesProvider, useFeatures } from './Providers/Core/FeaturesProvider';

const IndexRoute = () => {
  const { features } = useFeatures();

  return (
    <MainLayout>
      <AppToolbarView />
      {features.configView && <AppConfigView />}
      {features.coverageHistoryView && <AppCoverageHistoryView />}
      {features.pagesView && <PagesView />}
      {features.frameView && <FrameView />}
    </MainLayout>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FeaturesProvider>
        <InitialStateProvider>
          <IndexRoute />
        </InitialStateProvider>
      </FeaturesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

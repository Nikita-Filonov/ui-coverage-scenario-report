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

const IndexRoute = () => {
  return (
    <MainLayout>
      <AppToolbarView />
      <AppConfigView />
      <AppCoverageHistoryView />
      <PagesView />
      <FrameView />
    </MainLayout>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <InitialStateProvider>
        <IndexRoute />
      </InitialStateProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

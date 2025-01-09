import * as Sentry from '@sentry/react';
import AppWrapper from 'AppWrapper';
import { apiClient } from 'api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { ChainlitContext } from '@chainlit/react-client';

import './index.css';

import { i18nSetupLocalization } from './i18n';

i18nSetupLocalization();

Sentry.init({
  dsn: 'https://a62f77d1b018581a03e6662b8c85efc3@o4506330326368256.ingest.us.sentry.io/4507822503428096',

  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: 'system'
    })
  ]
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <AppWrapper />
      </RecoilRoot>
    </ChainlitContext.Provider>
  </React.StrictMode>
);

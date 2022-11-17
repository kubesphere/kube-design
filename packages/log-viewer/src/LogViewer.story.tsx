import * as React from 'react';
import { useState } from 'react';
import { Button } from '@kubed/components';
import LogViewer from './LogViewer';

import log from './data';

export default {
  title: 'Extension-Components/LogViewer',
  component: LogViewer,
};

export const basic = () => {
  const [logData, setLogData] = useState(log);

  const appendLog = () => {
    setLogData(`${logData}\n <-- GET /kapis/clusters/host/version 2022/11/07T10:16:34.713`);
  };

  return (
    <>
      <LogViewer
        log={logData}
        bodyStyle={{ height: '100%', overflowY: 'auto' }}
        logStyle={{ height: 700 }}
        autoScroll
      />
      <Button onClick={appendLog}>Append</Button>
    </>
  );
};

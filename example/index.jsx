import React from 'react';
import { render } from 'react-dom';

import QRcode from '../src/index';
import '../src/index.less';

const App = () => {
  const options = {
    qrCodeUrl: '//dpubstatic.udache.com/static/dpubimg/39377/Hk6EEzh0G.png',
    logoUrl: '//dpubstatic.udache.com/static/dpubimg/39377/B1qBEMnAf.png',
    iframeId: '',
  };

  return (
    <QRcode {...options} />
  );
};

render(<App />, document.getElementById('main'));

if (module.hot) {
  module.hot.accept();
}

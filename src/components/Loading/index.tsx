import React from 'react';
import LoadingStyle from './style';

const Loading: React.FC = () => (
  <LoadingStyle>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </LoadingStyle>
);

export default Loading;

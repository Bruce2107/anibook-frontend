import React from 'react';
import useQuery from '../../../utils/useQuery';

export default function RequestFail() {
  const query = useQuery();
  return (
    <>
      <div>{query.get('status')}</div>
    </>
  );
}

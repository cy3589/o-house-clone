/* eslint-disable react/no-unstable-nested-components */
import type { NextPage } from 'next';
import GenerateDivDummy from '@components/GenerateDivDummy';
import AppLayout from '@layouts/AppLayout';
// import { Scrollbars } from 'react-custom-scrollbars';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <GenerateDivDummy count={100} />
    </AppLayout>
  );
};

export default Home;

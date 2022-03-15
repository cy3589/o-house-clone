/* eslint-disable react/no-unstable-nested-components */
import type { NextPage } from 'next';
import Dummy500Child from '@components/Dummy500Child';
import AppLayout from '@layouts/AppLayout';
// import { Scrollbars } from 'react-custom-scrollbars';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Dummy500Child />
    </AppLayout>
  );
};

export default Home;

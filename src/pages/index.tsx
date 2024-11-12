import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AssetSlider from '../component/AssetSlider';
import HealthFactor from '../component/HealthFactor';
import LiquidationScenario from '../component/LiquidationScenario';
import PositionDetails from '../component/PositionDetails';
import PositionHeader from '../component/PositionHeader';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DeFi Simulator</title>
      </Head>
      <div className="max-w-full mx-auto p-4 space-y-6">
      <div className="max-w-full mt-4 px-6">
            <PositionHeader />
      </div>
        <div className="p-6 rounded-lg  space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HealthFactor />
            <PositionDetails />
            <LiquidationScenario />
          </div>
          <p className='text-orange-600 text-center text-sm'>Add, remove, and modify asset prices and quantities below to visualize changes to health factor and borrowing power.</p>
          <div className="p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-black my-2">Supplied Assets</h3>
            <AssetSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

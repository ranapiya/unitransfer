import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Dropdown } from './Dropdown';
import { PopOver } from './PopOver';
import CentreContainer from './CentreContainer';

const CentreBody = () => {
    return (
        <div>
                            <div className='flex justify-between items-center w-full p-5 mt-8'>
                    {/* Trade Button */}
                    <Button className='bg-gradient-to-r from-[#3e5a88] to-[#6b0c6b] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300 w-20 mb-5'>
                        Trade
                    </Button>

                    {/* Connect Wallet Button */}
                    <Button className='bg-gradient-to-r from-[#1c1919] to-[#4c4cd5] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300 w-48 mr-8'>
                        Connect Wallet
                    </Button>
                </div>
            <div className='flex ml-96 gap-80'>
                <div className='flex gap-4 text-lg'>
                    <Link href="/">
                        <Button className='bg-gradient-to-r from-[#1e1e2d] to-[#5f0d5e] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300 w-32 '>
                            Swap
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button className='bg-gradient-to-r from-[#1e1e2d] to-[#5b0f62] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300 w-32'>
                            Limit
                        </Button>
                    </Link>
                </div>
                <div className='flex gap-4'>
                    <Dropdown />
                    <PopOver />
                </div>
            </div>

            <div>
                <CentreContainer />
            </div>
            <div className='flex justify-center items-center mt-8'>
                <div className='h-20 w-2/6 bg-slate-900/60 mt-5 flex justify-center items-center p-4 rounded-lg bg-gradient-to-r from-[#1e1e2d] via-[#1e1e3f] to-[#1e1e2d] shadow-lg'>
                    <Button className='bg-gradient-to-r from-[#1e1e2d] to-[#09096c] text-white border border-gray-800 shadow-lg hover:shadow-xl transition duration-300 w-80'>Connect Wallet</Button>
                </div>
            </div>




           {/* New Token Info Section */}
           <div className='flex flex-col items-center mt-4'>
                <div className='w-4/6 bg-slate-900/80 p-2 rounded-lg shadow-lg'>
                    <div className='flex justify-between text-white'>
                        <div>
                            <h2 className='text-lg font-semibold'>USDC</h2>
                            <p className='text-xs'>Noble</p>
                        </div>
                        <div className='text-right'>
                            <h2 className='text-lg font-semibold'>1.00</h2>
                            <p className='text-xs text-green-500'>0.15%</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <canvas id='usdcChart' width='300' height='30'></canvas>
                    </div>
                </div>
                <div className='w-4/6 bg-slate-900/80 p-2 rounded-lg shadow-lg mt-2'>
                    <div className='flex justify-between text-white'>
                        <div>
                            <h2 className='text-lg font-semibold'>UNIP</h2>
                            <p className='text-xs'>Unipay</p>
                        </div>
                        <div className='text-right'>
                            <h2 className='text-lg font-semibold'>0.0404</h2>
                            <p className='text-xs text-red-500'>-5.52%</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <canvas id='astroChart' width='300' height='30'></canvas>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default CentreBody;

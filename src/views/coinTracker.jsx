import React, { useEffect } from 'react'
import { FcLike } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCoinData } from '../Redux/Slice/coinSlice';
import { useMoralis } from "react-moralis";


const CoinTracker = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { isauthenticated, logout } = useMoralis();
    const coinData = useSelector((state) => state?.coinData?.data);

    useEffect(() => {
        dispatch(getCoinData());
    }, []);

    return (
        <div className="bg-gray-900 flex-col  h-auto justify-center items-center pt-24">
            <div className="auto flex justify-end items-start mb-24 mr-12"><button className="w-16 h-8 rounded-md bg-green-600 text-gray-100" onClick={ () => { logout(); localStorage.clear(); } }>Logout</button></div>
            <h1 className="mt-1 text-center text-4xl font-extrabold text-transparent uppercase tracking-tighest sm:text-5xl lg:text-7xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">Cryptrac</h1>
            <h1 className="mt-1 text-center text-sm font-extrabold text-transparent uppercase tracking-tighest sm:text-md lg:text-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text">Track the future of exchange</h1>
            <h1 className="mt-6 text-center text-sm font-extrabold text-transparent uppercase tracking-tighest sm:text-md lg:text-md bg-gradient-to-r from-green-500 to-green-700 bg-clip-text">#1 Crypto Currency tracker in 2022</h1>

            <div className=' bg-gray-900 flex h-auto justify-center items-center pt-16'>
                <div className='w-11/12 flex justify-center '>
                    <table className="table-auto shadow-sm p-4 mb-44 overflow-y-scroll ">
                        <thead className='rounded-xl sticky top-0 '>
                            <tr className=' bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-300'>
                                <th className='px-6 py-4 text-left'>#</th>
                                <th className='px-6 py-4 text-left'>Coin</th>
                                <th className='px-6 py-4 text-right'>Price</th>
                                <th className='px-6 py-4 text-right'>1h</th>
                                <th className='px-6 py-4 text-right'>24h</th>
                                <th className='px-6 py-4 text-right'>24h Volume</th>
                                <th className='px-6 py-4 text-right'>Mkt Cap</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-600 ">
                            {
                                coinData?.length > 0 && coinData?.slice(0, 15)?.map((coin, index) => {
                                    return (

                                        <tr className='mt-6 bg-white bg-opacity-20 backdrop-blur-3xl hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-xl' key={ index } onClick={ () => {
                                            navigate(`/coin_detail/${coin?.id}`)
                                        } }>
                                            <td className="p-6   border-x-1 text-gray-400 ">{ index + 1 }.</td>
                                            <td className="p-6   border-x-1 text-gray-400 flex  items-end"><span className='px-0 pr-2'><img src={ coin?.image } alt={ coin.id + 'logo' } width='24px' /></span> <span className='font-bold text-left flex items-center'>{ coin?.name } &nbsp;</span> <span className='text-sm'>{ coin?.symbol.toUpperCase() }</span></td>
                                            <td className="p-6   border-x-1 text-right text-gray-400 ">${ coin?.current_price }</td>
                                            <td className={ `"p-6   border-x-1 text-right" ${coin?.price_change_percentage_1h_in_currency > 0 ? 'text-green-400' : 'text-red-400'}` }>{ parseFloat(coin?.price_change_percentage_1h_in_currency)?.toFixed(2) }%</td>
                                            <td className={ `"p-6   border-x-1 text-right" ${coin?.price_change_percentage_24h_in_currency > 0 ? 'text-green-400' : 'text-red-400'}` }>{ parseFloat(coin?.price_change_percentage_24h_in_currency)?.toFixed(2) }%</td>
                                            <td className="p-6   border-x-1 text-right text-gray-400 ">${ coin?.total_volume }</td>
                                            <td className="p-6   border-x-1 text-right text-gray-400 ">${ coin?.market_cap }</td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
};

export default CoinTracker

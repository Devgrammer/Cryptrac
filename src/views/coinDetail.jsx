import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCoinDetail } from '../Redux/Slice/coinSlice';
import { SocialIcon } from 'react-social-icons'
import { Line } from 'react-chartjs-2';
import { FcComboChart, FcViewDetails, FcElectroDevices } from "react-icons/fc";
import {
    Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip,
    Legend);

const _7dOptions = {
    responsive: true,

    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Price change in last 7 days in (%)',
        },
    },
};
const _7dOption = {
    responsive: true,

    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Price change in last 7 days',
        },
    },
};


const CoinDetail = () => {


    ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


    let dispatch = useDispatch();

    let id = useParams()
    console.log("id: ", id);


    const coinDetailData = useSelector((state) => state?.coinData?.detail);


    //console.log('settle', coinDetailData && Object.keys(coinDetailData ? coinDetailData : {})?.length > 0 && Object?.keys(coinDetailData?.market_data?.price_change_percentage_7d_in_currency))
    useEffect(() => {
        id && dispatch(getCoinDetail(id))
    }, [id])


    const data_7ds = Object?.keys(coinDetailData ? coinDetailData : {})?.length > 0 && coinDetailData?.market_data?.sparkline_7d?.price;

    const label_7ds = data_7ds?.length > 0 && data_7ds?.map((item, index) => ' ');
    console.log("labels_7d: ", label_7ds, data_7ds);
    console.log('fx', coinDetailData)
    const labels = coinDetailData && Object?.keys(coinDetailData ? coinDetailData : {})?.length > 0 && Object?.keys(coinDetailData?.market_data?.price_change_percentage_7d_in_currency);
    const label = coinDetailData && Object?.keys(coinDetailData ? coinDetailData : {})?.length > 0 && Object?.values(coinDetailData?.market_data?.price_change_percentage_7d_in_currency);
    const _7dData = {
        labels,
        datasets: [
            {
                label: 'Percentage Change',
                data: label,
                borderColor: '#4c79ee',
                backgroundColor: 'white',

                options: {
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: true
                        }
                    },
                },

            },

        ],
    };
    const _7dPrice = {
        labels: label_7ds,
        datasets: [
            {
                label: 'Price Change in USD',
                data: data_7ds,
                borderColor: '#4c79ee',
                backgroundColor: '#05b6d3',
                pointStyle: 'circle',
                pointRadius: 0,
                pointHoverRadius: 15,

                options: {
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: true
                        }
                    },
                },

            },

        ],
    };

    return (

        <div className='coin-detail-container flex w-full bg-gray-900   '>

            <div className="left w-2/3 px-14 py-14">
                <div className="coin-description-card w-100 h-max bg-white bg-opacity-20 backdrop-blur-3xl shadow-md flex-col rounded-xl p-8 hover:backdrop-blur-2xl ">
                    <div className="coin-name-cont flex items-center justify-between">
                        <div className='flex'>
                            <div className='w-auto flex items-center'>
                                <span className='w-10 h-10  flex justify-center mr-2 box-border'><img src={ coinDetailData?.image?.large } alt={ coinDetailData?.id + 'logo' } width='auto' height='auto' /></span></div>
                            <div className="name-content text-gray-200">
                                <div className="name font-bold text-3xl">{ coinDetailData?.name } </div>
                                <div className="symbol text-sm font-semibold">{ coinDetailData?.symbol?.toUpperCase() } </div>
                            </div>
                        </div>
                        <div className='flex items-start'><div className="name text-gray-200 font-bold text-3xl">${ coinDetailData?.market_data?.current_price?.usd } </div></div>
                    </div>

                    {/* <=====   Smart Contract   ===============> */ }
                    <div className="smart-contract-address pt-4"><span className='text-gray-400 mr-1'>Smart Contract:</span><span className='text-gray-200'>{ coinDetailData?.contract_address }</span></div>
                    {/* <=====  Visit   ===============> */ }
                    <div className="smart-contract-address pt-4">
                        <span className='text-gray-400 mr-1'>Visit:</span>
                        <span className=' w-8 h-8 mr-2'><SocialIcon bgColor="#d1d4dc" url={ `${coinDetailData?.links?.facebook_username}` } style={ { height: 28, width: 28 } } /></span>

                    </div>
                    {/* <=====  Social   ===============> */ }
                    <div className="smart-contract-address pt-4">
                        <span className='text-gray-400 mr-1'>Social:</span>
                        <span className=' w-8 h-8 mr-2'><SocialIcon bgColor="#d1d4dc" url={ `https://www.facebook.com/${coinDetailData?.links?.facebook_username}` } style={ { height: 28, width: 28 } } /></span>
                        <span className=' w-8 h-8 mr-2'><SocialIcon bgColor="#d1d4dc" url={ `https://www.twitter.com/${coinDetailData?.links?.twitter_screen_name}` } style={ { height: 28, width: 28 } } /></span>
                        <span className=' w-8 h-8 mr-2'><SocialIcon bgColor="#d1d4dc" url={ `${coinDetailData?.links?.homepage[0]}` } style={ { height: 28, width: 28 } } /></span>
                    </div>
                    {/* <=====  Social   ===============> */ }
                    <div className="smart-contract-address pt-4">
                        <span className='text-gray-400 text-sm mr-1 text-justify'>{ coinDetailData?.description?.en?.substring(0, 500) }...</span>

                    </div>

                </div>

                <div className="coin-description-card w-100 h-max bg-white bg-opacity-20 backdrop-blur-3xl shadow-md flex-col rounded-xl p-8 hover:backdrop-blur-2xl mt-14">
                    <div className="coin-name-cont flex items-center">
                        <div><span className='w-10 h-10  flex justify-center mr-2 box-border'><FcComboChart size={ '36px' } /></span></div>
                        <div className="name-content text-gray-200">
                            <div className="name font-bold text-3xl">Price change in 7 days in currencies (%) </div>
                        </div>
                    </div>

                    {/* <=====   Percentage Change in 7d   ===============> */ }


                    <Line options={ _7dOptions } data={ _7dData } />

                </div>

            </div>





            <div className="right w-1/3 pr-14 py-14 flex-col content-between">

                {/* <========== Details ===============> */ }
                <div className="coin-description-card w-100 h-max bg-white bg-opacity-20 backdrop-blur-3xl shadow-md flex-col rounded-xl p-8 hover:backdrop-blur-2xl ">
                    <div className="coin-name-cont flex items-center">
                        <div><span className='w-10 h-10  flex justify-center mr-2 box-border'><FcViewDetails size={ '36px' } /></span></div>
                        <div className="name-content text-gray-200">
                            <div className="name font-bold text-2xl">Details</div>
                        </div>
                    </div>



                    {/* <=====  Details: Bullets   ===============> */ }
                    <div className="smart-contract-address py-4">
                        <div className="smart-contract-address pt-4"><span className='text-gray-400 mr-1'>Market Capacity:</span><span className='text-gray-200'>${ coinDetailData?.market_data?.market_cap?.usd }</span></div>
                        <div className="smart-contract-address pt-4"><span className='text-gray-400 mr-1'>Total Volume:</span><span className='text-gray-200'>${ coinDetailData?.market_data?.total_volume?.usd }</span></div>
                        <div className="smart-contract-address pt-4"><span className='text-gray-400 mr-1'>24hr Price Change (%) :</span><span className='text-gray-200'>{ coinDetailData?.market_data?.price_change_percentage_24h }%</span></div>

                    </div>


                    {/* <================ Price change in 7d===============> */ }
                </div>
                <div className="coin-description-card w-100 h-max bg-white bg-opacity-20 backdrop-blur-3xl shadow-md flex-col rounded-xl p-8 hover:backdrop-blur-2xl mt-20 ">
                    <div className="coin-name-cont flex items-center">
                        <div><span className='w-10 h-10  flex justify-center mr-2 box-border'><FcComboChart size={ '36px' } /></span></div>
                        <div className="name-content text-gray-200">
                            <div className="name font-bold text-2xl">Price change in 7 days </div>
                        </div>
                    </div>

                    {/* <=====   Percentage Change in 7d   ===============> */ }


                    <Line options={ _7dOption } data={ _7dPrice } />

                </div>


                {/* <========== Details ===============> */ }
                <div className="coin-description-card w-100 h-max bg-white bg-opacity-20 backdrop-blur-3xl shadow-md flex-col rounded-xl p-8 hover:backdrop-blur-2xl mt-20 ">
                    <div className="coin-name-cont flex items-center">
                        <div><span className='w-10 h-10  flex justify-center mr-2 box-border'><FcElectroDevices size={ '36px' } /></span></div>
                        <div className="name-content text-gray-200">
                            <div className="name font-bold text-2xl">High & Lows</div>
                        </div>
                    </div>



                    {/* <=====  Details: Bullets   ===============> */ }
                    <div className="smart-contract-address py-4">
                        <div className="smart-contract-address pt-4"><span className='text-gray-400 mr-1'>High_24h:</span><span className='text-gray-200'>${ coinDetailData?.market_data?.high_24h?.usd }</span></div>
                        <div className="smart-contract-address pt-4"><span className='text-gray-400 mr-1'>Low_24h:</span><span className='text-gray-200'>${ coinDetailData?.market_data?.low_24h?.usd }</span></div>


                    </div>
                </div>



            </div>

        </div>
    )
}

export default CoinDetail

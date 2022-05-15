import React from 'react'
import Meta from '../assets/img/Metamask-icon.png'
import { useMoralis } from "react-moralis";


export const Home = () => {
    const { authenticate, signup } = useMoralis();

    return (
        <div className=' backdrop-filter home-bg bg-fixed w-full h-screen z-0 flex  justify-between items-center px-44 backdrop-contrast-0  ' >
            <div className="left-division w-50">
                <div className="content-container flex-col  justify-center   z-10">
                    <div className="heading text-7xl text-white font-semibold">Cryptrac.<br /> A place to meet <br />all your coins.</div>
                    <div className="sub-heading text-white my-3">A  crypto currencies tracker which make your smart life easy.</div>
                </div>
            </div>
            <div className="transform right-division flex-col bg-white bg-opacity-50 backdrop-blur-3xl  rounded-xl  w-72 h-64 justify-items-center py-14 hover:scale-105 duration-500 ease-in-out">
                <div className="right-div-meta-mask-logo flex justify-center mb-4  "><img src={ Meta } width="72px" height="auto" alt="" /></div>
                <div className="right-div-meta-mask-button w-auto justify-center items-end flex mt-12">
                    <button className='w-64 h-16 bg-green-700 bg-opacity-90 backdrop-blur-3xl rounded-md text-gray-200 font-semibold hover:bg-green-600' onClick={ () => authenticate() }>Login using Metamask</button>

                </div>

            </div>


        </div>
    )
}

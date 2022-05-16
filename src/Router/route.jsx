import React from 'react'
import { Routes, Route, } from "react-router-dom";
import CoinTracker from '../views/coinTracker'
import CoinDetail from '../views/coinDetail'




const Routing = () => (
        <Routes>
                <Route exact path={ '/' } element={ <CoinTracker /> } />
                <Route exact path={ '/coin_detail/:id' } element={ <CoinDetail /> } />
        </Routes>
);

export default Routing;
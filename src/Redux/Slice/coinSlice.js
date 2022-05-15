import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getCoinData = createAsyncThunk('./getCoinData' , async()=>{
    return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d').then((res)=>res.json())
})
export const getCoinDetail = createAsyncThunk('./getCoinDetail' , async(id)=>{
    let URL =`https://api.coingecko.com/api/v3/coins/${id?.id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
    console.log("URL: ", URL, id.id);
    return fetch(URL).then((res)=>res.json())
})


const coinDataSlice = createSlice({
    name:'coinData',
    initialState:{
        data:[],
        detail:[],
        status: null
    },
    extraReducers:{
        [getCoinData.pending]: (state, action)=>{
            state.status='loading'
        },
        [getCoinData.fulfilled]: (state, {payload})=>{
            state.data= payload;
            state.status='success'
        },
        [getCoinData.rejected]: (state, action)=>{
            state.status='failed'
        },
        [getCoinDetail.pending]: (state, action)=>{
            state.status='loading'
        },
        [getCoinDetail.fulfilled]: (state, {payload})=>{
            state.detail= payload;
            state.status='success'
        },
        [getCoinDetail.rejected]: (state, action)=>{
            state.status='failed'
        },
    }
})

export default coinDataSlice.reducer;

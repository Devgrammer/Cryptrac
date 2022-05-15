import {configureStore} from '@reduxjs/toolkit'
import coinDataReducer from '../Slice/coinSlice'


export const store = configureStore({
    reducer:{
        coinData: coinDataReducer,

    }
})



// export type RootState= ReturnType<typeof store.getState>;
// export type AddDispatch = typeof store.dispatch;
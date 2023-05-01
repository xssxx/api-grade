import { configureStore } from "@reduxjs/toolkit";
import UserReducer from  './Users'

const store = configureStore({
    reducer: {
        user: UserReducer,
    },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        token: "",
        grade: {}
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setGrade: (state, action) => {
            state.grade = action.payload
        }
    },
});

export const { setToken, setGrade } = UserSlice.actions;
export default UserSlice.reducer;
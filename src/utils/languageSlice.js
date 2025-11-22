import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"lang",
    initialState:{
        languageName:"en",
    },
    reducers:{
        selectedLanguage:(state, actions)=>{
            state.languageName = actions.payload;
        }
    }
})

export const{selectedLanguage} = languageSlice.actions;
export default languageSlice.reducer;
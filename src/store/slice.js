import { createSlice } from "@reduxjs/toolkit"

export const Slice = createSlice({
    name:'valores',
    initialState:{
        nombre:'Lucio',
    },
    reducers:{
        gurdarnombre:(state,action)=>{
            state.nombre = action.payload;
        }
    }
})

export const {gurdarnombre} = Slice.actions;
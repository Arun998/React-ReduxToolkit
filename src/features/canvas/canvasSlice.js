import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    color:{
        code:"#000000"
    },
    font:{
        size:16
    },
    fontStyle:{
        style:"Times New Roman"
    }
};

export const canvasSlice = createSlice({
    name: "canvas",
    initialState,
    reducers:{
        changeColor:(state,action)=>{
            state.color.code=action.payload
        },
        changeFont:(state,action)=>{
            state.font.size=action.payload
    },
    changeFontStyle:(state,action)=>{
        state.fontStyle.style=action.payload
    }
}
});

export const selectColor = (state)=>state.canvas.color.code;
export const selectFont = (state)=>state.canvas.font.size;
export const selectFontStyle = (state)=>state.canvas.fontStyle.style;

export const {changeColor,changeFont,changeFontStyle}=canvasSlice.actions

export default canvasSlice.reducer
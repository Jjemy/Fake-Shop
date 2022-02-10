import {actionTypes} from "../constants/action-types";

export const setProduct=(products)=>{
    return{
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return{
        type:actionTypes.SELECTED_PRODUCTS,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:actionTypes.REMOVE_SELECTED_PRODUCTS
    }
}
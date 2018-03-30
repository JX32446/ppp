import {combineReducers} from 'redux';
export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CART'
export const UPDATA_GOODS_COUNT = 'UPDATA_GOODS_COUNT'

let initState={
    cart_list:[]
}

function cart_list(state=initState.cart_list,action){
    switch(action.type){
        case ADD_CART:return[...state,action.data];
        break;
    }
    return state;
}

export default combineReducers({
    cart_list
})
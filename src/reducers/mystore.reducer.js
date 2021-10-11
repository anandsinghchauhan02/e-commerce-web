import * as actionTypes from '../actions/actionTypes';

const initialState = {
    getStoreData:{},
    getViewProductData:{}
};


const mystoreReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionTypes.GET_STORE_DATA:
        {
            return{
                ...state,
                getStoreData:action.payload
            }
        }
        case actionTypes.GET_VIEW_PRODUCT_DATA:
        {
            return{
                ...state,
                getViewProductData:action.payload
            }
        }
        default:
            {
                return state;
            }
    }
}


export default mystoreReducer;
import * as actionTypes from './actionTypes';
import axios from "axios";
import { base_url } from '../utils/url'

export const getStoreList = () => {
    const request = axios.get(base_url + 'products', {});
    return (dispatch) =>
        request
            .then((response) =>
                dispatch({
                    type: actionTypes.GET_STORE_DATA,
                    payload: response,
                })
            )
            .catch((err) => {
                dispatch({
                    type: actionTypes.GET_ERRORS,
                    payload: err,
                });
            });
};
export const viewProduct = (key) => {
    const request = axios.get(base_url + `products/${key}`, {});
    return (dispatch) =>
        request
            .then((response) =>
                dispatch({
                    type: actionTypes.GET_VIEW_PRODUCT_DATA,
                    payload: response,
                })
            )
            .catch((err) => {
                dispatch({
                    type: actionTypes.GET_ERRORS,
                    payload: err,
                });
            });
};


import axios from 'axios';

import { GET_SINGLE_POST, CLEAR_POST } from './types';

export const getSinglePost = (id) => {
    return (dispatch) => {
        axios.get('/api/gallery/' + id)
            .then(response => {
                if (response && response.data) {
                    dispatch(getPost(response.data));
                }
            }, error => {
                throw (error);
            });


    }
};

export const clearPostState = () => {
    return (dispatch) => {
        dispatch(clearPost())
    }
};

export const clearPost = () => {
    return {
        type: CLEAR_POST,
        payload: {
            post: {}
        }
    }
}


export const getPost = (data) => {
    return {
        type: GET_SINGLE_POST,
        payload: {
            body: data
        }

    }
}
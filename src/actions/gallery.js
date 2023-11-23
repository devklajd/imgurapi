import axios from 'axios';

import { GET_GALLERY_CONTENT } from './types';

export const getGallery = (props) => {
    const filterData = getFilterData(props);
    return (dispatch) => {
        axios.post('/api/gallery', filterData)
            .then(response => {
                console.log(response);
                dispatch(gallery(response.data));
            })
            .catch(error => {
                throw (error);
            });
    }
};

const getFilterData = (props) => {
    return {
        section: props.sect,
        sort: props.sortParam,
        showViral: props.viral,
        window: props.wnd
    }
}

export const gallery = (data) => {
    return {
        type: GET_GALLERY_CONTENT,
        payload: {
            // _id: data._id,
            // title: data.title,
            body: data
        }

    }
}
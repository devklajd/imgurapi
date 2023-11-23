// import axios from 'axios';

import { SET_SORT } from './types';


export const handleSort = (data) => {
    return {
        type: SET_SORT,
        payload: {
            sort: data
        }

    }
}
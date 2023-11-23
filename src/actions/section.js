// import axios from 'axios';

import { SET_SECTION } from './types';


export const handleSection = (data) => {
    return {
        type: SET_SECTION,
        payload: {
            section: data
        }

    }
}
// import axios from 'axios';

import { SET_WINDOW } from './types';


export const handleWindow = (data) => {
    return {
        type: SET_WINDOW,
        payload: {
            window: data
        }

    }
}
import { SET_VIRAL_IMAGE_VISIBLITY } from './types';


export const handleViralImageVisiblity = (visible) => {
    return {
        type: SET_VIRAL_IMAGE_VISIBLITY,
        payload: {
            visiblity: visible
        }

    }
}
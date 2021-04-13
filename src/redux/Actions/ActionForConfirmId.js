
import { AESTROIDID } from './AestroidIdActionType';
import { getInfoWithIdService } from '../../Services/getInfoWithIdService';

export const AsteroidDetailsAction = (id) =>{
    return async (dispatch) => {
    const details = await getInfoWithIdService(id)
        dispatch({
            type:AESTROIDID,
            payload:details.data
        })
        console.log('deatils------ ',details);
        
    };
};





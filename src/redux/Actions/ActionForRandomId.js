import { getALLRandomAsteroidService } from "../../Services/getALLRandomAsteroidService";
import { GET_ALL_ASTEROIDS } from './AestroidIdActionType';

// getting  ALL Random Asteroid Id Data:
export const GetAllAsteroid = () => {
    // const details = await getALLRandomAsteroidService();
    // // return (details.data.near_earth_objects.map(({ id }) => id));
    // return (details.data)
    
    return async (dispatch) => {
        const details = await getALLRandomAsteroidService()
            // console.log('getALLRandomAsteroidService deatils-- ',details);
            return details.data
        };
}
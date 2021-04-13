import Axios from 'axios';

export const getALLRandomAsteroidService = async () => {

    //when the user click the random Asteroid button make a call to : 
    return (Axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'))
}

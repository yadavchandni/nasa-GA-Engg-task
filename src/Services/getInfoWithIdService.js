import Axios from 'axios';

export const getInfoWithIdService = async (id) =>{

    // select Random Asteroid id Where Pass ID to 
   //Format Axios.get(https://api.nasa.gov/neo/rest/v1/neo/{Enter Astroid Id }?api_key={Enter Your Api Key })

    return (Axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=R7trwRQsd2mlQlLSGGPXkcjtPddm1CMie7uPAt6N`)
//        .then((res)=>{
//            return res;
//        })
//    .catch((e)=>{
//        return e;
//    })

    );
}
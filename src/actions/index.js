import {INCREMENT,DECREMENT} from '../constants';
//import {FETCH_USER_SUCCESS,FETCH_USER_FAILURE,FETCH_USER_REQUEST} from '../constants'
import {LOAD_USER} from '../constants'
import axios from 'axios';

export const increment=()=>{
    return dispatch=>{
        setTimeout(()=>{
            return dispatch({
                type:INCREMENT
            })
        },2000)
    }
};
export const decrement=()=>{
    return{
        type:DECREMENT
    }
};

export const get_user=()=>{
    // return dispatch=>{
    //     dispatch(fetch_user_request());
    //     axios.get('https://randomuser.me/api/')
    //         .then(res=>{
    //             dispatch(fetch_user(res.data.results[0]))
    //         })
    //         .catch(error=>{
    //             dispatch(fetch_user_failure(error))
    //         })
    // }
    return {
        type: LOAD_USER,
        payload:axios.get('https://randomuser.me/api/')
    }

};

// const fetch_user_failure=(error)=>{
//     return{
//         type:FETCH_USER_FAILURE,
//         error
//     }
// };
// const fetch_user=(user)=>{
//     return{
//         type:FETCH_USER_SUCCESS,
//         user
//     }
// };
// const fetch_user_request=()=>{
//     return{
//         type:FETCH_USER_REQUEST,
//     }
// };



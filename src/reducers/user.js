import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    LOAD_USER_FULFILLED,
    LOAD_USER_PENDING,
    LOAD_USER_REJECTED
} from "../constants";

const initState={
    isFetching:false,
    error:null,
    user:{}
};
const user=(state=initState,action={})=>{
    switch (action.type){
        case LOAD_USER_FULFILLED:
            return {
                isFetching:false,
                error:null,
                user:action.payload.data.results[0]
            };
        case LOAD_USER_REJECTED:
            return{
                isFetching:false,
                error:action.payload.response.data,
                user:{}
            };
        case LOAD_USER_PENDING:
            return{
                isFetching:true,
                error:null,
                user:{}
            };
        default:return state
    }
};

export default user;
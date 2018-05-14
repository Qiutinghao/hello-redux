import React,{Component} from 'react';
import {connect} from 'react-redux'
import {get_user} from '../actions/index'
//import { bindActionCreators } from "redux";

class User extends Component{
    render(){
        const {get_user}=this.props;
        const{isFetching,user,error}=this.props.user;
        let data;
        if(isFetching){
            data="loading..."
        }else if(error){
            data=error;
        }else{
            data=user.email
        }
        return(
            <div>
                <h1 className='jumbotron-heading text-center'>{data}</h1>
                <p className='text-center'>
                    <button className="btn btn-success mr-2" onClick={()=>get_user()}>GET RANDOM USER</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
};
// const mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators({get_user},dispatch)
// };
export default connect(mapStateToProps,{get_user})(User)
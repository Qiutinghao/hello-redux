import React, { Component } from 'react';
import {connect} from 'react-redux';
import *as types from "./actions";
import { bindActionCreators } from "redux";
import User from './components/user';


const mapStateToProps=(state)=>{
    return{
        counter:state.counter
    }
};
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(types,dispatch)
};
@connect(mapStateToProps,mapDispatchToProps)
class App extends Component {
  render() {
      const {increment,decrement}=this.props;
      return (
          <div className='container'>
              <h1 className='jumbotron-heading text-center'>{this.props.counter}</h1>
              <p className='text-center'>
                  <button onClick={()=>increment('qiu')} className="btn btn-primary mr-2">Increase</button>
                  <button onClick={()=>decrement()} className="btn btn-danger my-2">Decrease</button>
              </p>
              <User/>
          </div>
      );
  }
}


export default App;

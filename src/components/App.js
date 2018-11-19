import React,{Component} from 'react';
import { connect } from 'react-redux';
import User from './Pure';
import Mains from './ReduxDemo';
import {setName} from '../actions/useraction';
import {addNumber} from '../actions/mathaction'
class App extends Component {

    render() { 
        return ( 
            <div className="container">
            <Mains changeuername={()=>this.props.setName("Anna")}/>
            <User username={this.props.user.name}/>
            </div>
         );
    }
}
 
const  mapStateToProps=(state)=>{
    return {
   user:state.user,
   math:state.math
    };
}
const  mapDispatchToProps=(dispatch)=>{
    return {
   setName:(name)=>{
       dispatch(setName(name));
  
    }
};
};
export default connect(mapStateToProps,mapDispatchToProps)(App)

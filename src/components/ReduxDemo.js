import React,{Component}from 'react';

// class App extends Component {

//     render() { 
//         return ( 
//             <div className="container">
//             <Main/>
//             </div>
//          );
//     }
// }
 
// const  mapStateToProps=(state)
// export default App;
class Mains extends Component {
    
    render() { 
        return ( 
            <button onClick={this.props.changeuername}>CLick</button>
         );
    }
}
 
export default Mains;   
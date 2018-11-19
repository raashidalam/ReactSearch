import React from "react";
import ReactDOM from "react-dom";
// import {BrowserRouter,Route} from "react-router-dom";
import "./style/app.css"; 
import {Provider} from 'react-redux'

// import Home from "./components/Home";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Form from './components/form';
import Func from './components/func'
import ReduxDemo from "./components/ReduxDemo";
import Main from "./components/Pure";
import GetData from "./components/GetData";
import Youtube from "./components/Youtube";
import {Switch,BrowserRouter as Router,Route, Redirect} from 'react-router-dom';
import App from "./components/App";
import store from "./store"
// import User from "./components/User";
// class App extends Component {
//   render() { 
//     return (  
//       <BrowserRouter>
//       <Route path="new"  Compoynent={Header}/>
//       </BrowserRouter>
//     );
//   }
// }
 
// export default App;

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// const Index = () => {
//   const name ="Raashid Alam";

//   return <h1>Hello {name}</h1>;
// };

// ReactDOM.render(
//   <Layout/>,
//   document.getElementById('index'));



// const logger=(store)=>(next)=>(action)=>{
//     console.log("Middleware",action);
//     next(action);
// }


// store.subscribe(()=>{
// console.log("State updated",store.getState());
// }
// )

ReactDOM.render(
    <Provider store={store}>
   <Youtube/>
   </Provider>
,document.getElementById('index'));
// store.dispatch({
//     type:"ADD",
//     payload:100

// })
// store.dispatch({
//     type:"ADD",
//     payload:12

// })

// store.dispatch({
//     type:"Set_name",
//     payload:"Raashid"

// })
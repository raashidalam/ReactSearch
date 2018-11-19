import {createStore,combineReducers, applyMiddleware} from 'redux';
const InitialState={
    result:1,
    lastValue:[]
   
}
const InitialChangeState={
    name:"alam"
    
  

}
const Mathreducer=(state=InitialState,action)=>{
    switch(action.type){
        case "ADD":
        state={
           ...state,
           result:state.result+action.payload,
           lastValue:[...state.lastValue,action.payload]
        };
       // state.lastValue.push(action.payload);
       // InitialState.result+=action.payload;
        break;
        case "SUBTRACT":
        break;
 

    }
    return state;
}
const Changereducer=(state=InitialChangeState,action)=>{
    switch(action.type){
        case "Set_name":
        state={
           ...state,
           name:action.payload
      
        };
       // state.lastValue.push(action.payload);
       // InitialState.result+=action.payload;
        break;
        case "SUBTRACT":
        break;


    }
    return state;
}
const Logger=(store)=>(next)=>(action)=>{
    console.log("Middleware",action);
    next(action);
}
const store=createStore(combineReducers({Mathreducer,Changereducer}),{},applyMiddleware(Logger));

store.subscribe(()=>{
console.log("State updated",store.getState());
}
)
store.dispatch({
    type:"ADD",
    payload:100

})
store.dispatch({
    type:"ADD",
    payload:12

})

store.dispatch({
    type:"Set_name",
    payload:"Raashid"

})
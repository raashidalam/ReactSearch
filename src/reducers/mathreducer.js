const Mathreducer=(state={
    result:1,
    lastvalue:[]
},action)=>{
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
export default Mathreducer
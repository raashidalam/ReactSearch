const Changereducer=(state={
       name:"alam"},action)=>{
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
export default Changereducer;
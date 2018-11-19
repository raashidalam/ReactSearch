const YoutubeSearch=(state={
    search:"",
    display_view:"list"},action)=>{
 switch(action.type){
     case "Search":
     state={
        ...state,
        search:action.payload
   
     };
    // state.lastValue.push(action.payload);
    // InitialState.result+=action.payload;
     break;
    
   
    case action.payload:
    state={
        ...state,
        display_view:action.payload
    };
    break;

    case action.payload:
    state={
        ...state,
        display_view:action.payload
    };
    break;
 }
 return state;
}
export default YoutubeSearch;
export function setSearch(search){
    return{
        type:"Search",
        payload:search
    }
}
export function displayMode(view){
    
        if(view==="list")
        {
            return{
                type:"thum",
                payload:"thum"
            };
            
        }
        if(view==="thum")
        {
            return{
                type:"list",
                payload:"list"
            };
            
        }
      
    }

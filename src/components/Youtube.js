import React,{Component} from 'react'
import Thumbnails from './Thumbnail';
import { connect } from 'react-redux';
import {setSearch,displayMode} from '../actions/YoutubeSearch';
import {fetchVideo} from '../actions/YoutubeAction';
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=java&type=video&key=AIzaSyBcDESxFVmjrNPaHQR7MdZZialiNRbkSY0

class Youtube extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            // finalYoutube:[],
         //   search:'',
            view:'list'
            // view_display:'Thumbnails'
            
          
          
        }
        // this.clicked=this.clicked.bind(this);
        // this.handleChange=this.handleChange.bind(this);
        // this.deletevideo=this.deletevideo.bind(this);
    }
   //This function for displaying videos in  Thumbnails view
//    thum(){
//     this.state.view=='list' ?(
//    this.setState({
//        view:'thum',
//        view_display:'list'
//    })
// ):
//    this.setState({
//        view:'list',
//        view_display:'Thumbnails'
//    })
//       }
    //Fetch the video from youtuibe api
    // clicked()
    // {
    //     return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.search}&key=AIzaSyBcDESxFVmjrNPaHQR7MdZZialiNRbkSY0`)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //    console.log(responseJson);
    //     const resultYt=responseJson.items.map(obj=>obj);
  
    
    //     this.setState({
    //        finalYoutube: resultYt,
          
           
    //     });
    //      console.log(this.state.resultYt);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
    //Handle the input change in search box 
    // handleChange(event) {
    //     this.setState({search: event.target.value})
        
    //   }
      
      // Deleting Video from List
    // deletevideo(index)
    // {
    //   const video=Object.assign([],this.state.finalYoutube);
    //   video.splice(index,1);
    //   this.setState({
    //   finalYoutube:video
    // })
    // }


    render() { 
  
        return (
            <div className="container" >
           <div className="row">
           <div className="col-md-6 offset-2">
           <h1>Welcome to Youtube</h1>
           </div>
           </div>
            
            
            <div className="row">
           
            <div className="col-md-3 offset-2">
            <div className="form-group">
                <input size="40" className="form-control" type="text" 
                value={this.props.searchs.search}  
                onChange={this.props.setName.bind(this)} name="name" 
                placeholder="Enter text to search"  />
                </div>
           
                </div>
                <div className="col-md-3">
                <button className="btn btn-secondry" onClick={()=>this.props.getvideo(this.props.searchs.search)} >Search</button>
                </div>
                <div className="col-md-1">
                <button classNmae="btn btn-secondry" onClick={()=>this.props.ChangeDispalyMode(this.props.searchs.display_view)}>{this.props.searchs.display_view}</button>
                </div>
              
      
        
        </div>
     
  
        
        { this.props.searchs.display_view=='list' ? (
        
            this.props.youtube.items.map((link,i)=>{
             
                   var frame=(
                 
            <div className="row">
                  <div className="col-md-3">
                          <iframe key={i} width="200" height="150" src={"https://www.youtube.com/embed/"+link.id.videoId} 
            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
            </iframe></div>
     <div className="col-md-6">
     <span>Title: </span>
     <span>{link.snippet.title}</span></div>
         <div className="col-md-3"> 
         <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></div>
        
         </div>
         
       
        );
        return frame;
       
                }) 
      ) : (
        <Thumbnails finalYoutube={this.props.youtube.items} />
        
      )
               
                   
            }
               
               </div>  
              
          );
    
}
}
const  mapStateToProps=(state)=>{
    return {
  youtube :state.youtube,
   searchs:state.searchs
   
    };
}
const  mapDispatchToProps=(dispatch)=>{
    return {
   setName:(event)=>{
       dispatch(setSearch(event.target.value));
  
    },
    getvideo:(search)=>{
        dispatch(fetchVideo(search));
   
     },
     ChangeDispalyMode:(view)=>{
        dispatch(displayMode(view));
   
     }
};
};
export default connect(mapStateToProps,mapDispatchToProps)(Youtube)


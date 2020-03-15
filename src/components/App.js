import React, { Component } from 'react';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Artist from './Artist';
import Search from './Search';
import Tracks from './Tracks';
import Songs from './Songs';
import Header from './Header';
import Musics from './Musics';
import Acss from './Acss';
const API_ADDRESS='https://spotify-api-wrapper.appspot.com';

class App extends Component {

  
  
  /* searchArtist=()=>{
       //console.log('this.state',this.state);

       fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
       .then(response => response.json())
       .then(json => {
         //  console.log('json',json);

           if(json.artists.total>0)
           {
               const artist=json.artists.items[0];
              // console.log('artist',artist);
               this.setState({artist});
                   
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response=>response.json())
                .then(json=>this.setState({tracks:json.tracks}))
                .catch(error=>alert(error.message));



           }
       })
       .catch(error=>alert(error.message));
   }*/
    render(){
         
       
           
        return(
            <div className="color">
               <Header />
               
               <h1>MUSIC PLAYER</h1>
                
                <Search />    
            
        
            </div>
            

        );
    }
}
export default App;
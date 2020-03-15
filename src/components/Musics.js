import React, { Component } from 'react';

import Search from './Search';
import Songs from './Songs';
import axios from 'axios';



class Musics extends Component {
  

    state={ playing: false, audio:null };
    playAudio = previewUrl => () => {

         console.log(previewUrl);
     

        const audio = new Audio(previewUrl);


        if(!this.state.playing){
             
            audio.play();
           this.setState({ playing:true, audio});
          
           
        }
else{
            this.state.audio.pause();
          this.setState({ playing:false });
       }
        
  
    }
  
  render() {
    const { tracks } = this.props;

    return (
      <div>
        {
          
          tracks.map(track => {
            const { id, name, album, previewUrl } = track;

            return (
              <div  className='track' key={id} onClick={this.playAudio(previewUrl)}>
                <img 
                  src={album.images[0].url}
                  alt='track-image'
                  className='track-image'
                  
                />
            <p className='track-text'>{name}</p>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}

export default Musics;
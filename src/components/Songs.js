import React,{Component} from 'react';
import axios from 'axios';
import Tracks from './Tracks';
import Musics from './Musics';
class Songs extends Component{



      
    state={ tracks:[] };


    componentDidMount(){
                    



       /* axios.get('http://localhost:8000/songss')
        .then(res=>{
            console.log(res.data);
            this.setState({tracks: res.data});
        })
        .catch(err=>{
            alert(err);
        })*/

        fetch('http://localhost:8000/songss')
    .then(response => response.json())
    .then(json => {
        this.setState({tracks:json})
        console.log('jsssson',json);
    })
        
    }


    render(){
           
        return(
            <div>
                
                <Musics tracks={this.state.tracks} />    
           
      
                
            </div>
        )


    }




   








}

export default Songs;
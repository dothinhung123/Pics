import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component{
    state={images:[]}
    onSubmit= async (value)=>{
      const response = await  axios.get( `https://api.unsplash.com/search/photos`,{
            params:{query:value},
            headers:{
                Authorization:'Client-ID fc1bb97b757aa161cf949ad6daef8503ae2f7b7d943c82c66a96fc0d81d7a367'
            }
        })
        this.setState({images:response.data.results})
    }
    render(){
        return(
            <div>
                <SearchBar onSubmit={this.onSubmit}></SearchBar>
                <ImageList images={this.state.images}></ImageList>

            </div>
        )
    }
}
export default App
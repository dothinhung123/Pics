import React from 'react'; 
import SearchBar from './SearchBar'
import axios from 'axios'
import ImagesList from './ImagesList';
class App extends React.Component{
    state={images:[]}
    onSearchSubmit =async(term)=>{
        const url = "https://api.unsplash.com/search/photos"
        const response = await axios.get(url, {
            params:{query:term},
            headers:{
                Authorization:'Client ID fc1bb97b757aa161cf949ad6daef8503ae2f7b7d943c82c66a96fc0d81d7a367'
            }
         })
         this.setState({images:response.data.results})
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit = {this.onSearchSubmit}></SearchBar>
             <ImagesList images={this.state.images}></ImagesList>

            </div>
        )
    }
}
export default App